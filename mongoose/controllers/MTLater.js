var later = require("later");
var request = require("request");
later.date.localTime();
const mtInterval = function(sched,gameObj,gameEn){
	later.setInterval(()=>{
	    var url = "http://api.caipiao.163.com/missNumber_trend.html?product=caipiao_client&gameEn="+gameEn;
	    request.get(url,async (err,responsed,body)=>{
	        if(body){
				var res = JSON.parse(body);
				res.length = res.data.length;//数组的长度
	        	var data = await new Promise((resolve,reject)=>{
	                gameObj.find({},{"data":{"$slice":1}}).then((data)=>{
	                    resolve({data:data,obj:gameObj});
	                })
	            })
	             if(!data.data.length){
	                    // 如果不存在数据,则新建数据库表
	                    console.log("不存在数据");
	                    new data.obj(res).save().then((rs)=>{
	                        // console.log(rs);
	                        console.log("ssq数据");
	                    })
	                }else{
						var period = data.data[0].data[0].period;
	                    var newDataArr = [];//要插入数据库的新数据
	                    if(res.data.length){
	                        var length = res.data.length;
	                        console.log(gameEn+"数据长度"+length);
	                        for(let j=0;j<length;j++){
	                            var dataObj = res.data[j];
	                            if(dataObj.period===period){
	                                break;
	                            }
	                            //判断数据是否为空,如果为空
	                            if(dataObj.winnerNumber.length){
	                                dataObj.createTime = Date.now();
	                                newDataArr.push(dataObj);
	                            }
	                        }
	                        //将最新的数据插入到数据库中
	                        if(newDataArr.length){
	                            data.obj.update(
	                                {_id:data.data[0]._id},
	                                {
	                                    $push:{
	                                        data: {
	                                            $each: newDataArr,
	                                            $position:0,
	                                        }
	                                    }
	                                }
	                            ).then((resp)=>{
	                                console.log("插入结果");
	                                console.log(resp);
	                            })
	                        }

	                    }
	                }
	        }
	    })
	},sched);
}
exports = module.exports = mtInterval;