const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/lottery',{useNewUrlParser:true},(err)=>{
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
    }
})
//导出mongoose的Schema构造函数
const Schema = mongoose.Schema;

exports = module.exports = Schema;