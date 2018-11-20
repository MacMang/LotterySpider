## 定时彩票数据爬虫

### 该爬虫开源并仅限于技术学习交流,请勿做其他非法用途

安装: 
```
$ npm i 
$ node app.js
```

主要功能是爬取彩票数据.

该爬虫可以实现的功能:
	1. 按照开奖时间进行爬取数据,一般会在开奖之后,3分钟或者其他时间上爬取数据.
	2. 目前可以爬取的数据有 双色球,11选5,大乐透,快3,3d等彩种

该项目使用到的技术有

	1. later插件: 让Nodejs来管理定时任务later
	2. request: 对其他服务器的发起请求
	3. mongoose用于存储取到的数据


later的配置格式,时间定义完整列表：

	- Second, s: 秒, 取值范围:[0-59]
	- minute, m：分, 取值范围:[0-59]
	- hour, h: 时, 取值范围:[0-23]
	- time, t: 秒每日, 取值范围:[0-86399]
	- day, D: 日, 取值范围:[1-31]
	- dayOfWeek, dw, d: 日每周, 取值范围:[1-7]
	- dayOfYear, dy: 日每年，取值范围:[1-365]
	- weekOfMonth, wm: 周每月，取值范围:[1-5]
	- weekOfYear, wy: 周每年，取值范围:[1-52]
	- month, M: 月，取值范围:[1-12]
	- year, Y: 年，取值范围:[1970-2099]

```
var composite = [];//设定触发事件的事件段
var m = [];////在指定的分钟数触发事件
for(var i=3;i<60;i+=1){
    m.push(i);
}
for(var i=8;i<=23;i++){
    composite.push({
        h: [i], //在指定的小时里触发事件
        m: m, //在指定的分钟数触发事件
    })
}
//配置定时任务
var sched = {
    schedules: composite
}
//以当前事件为主
later.date.localTime();

```


1. 设定定时任务,
双色球开奖时间 周二 21:15 周四21:15 周日21:15
```
/双色球
var composite = [];
var m = [];
for(var i=1;i<=60;i++){
    m.push(i);
}
//配置每天22点跟新数据
composite.push({
    dw:[2,4,7],
    h: [21,22,23],
    m: m
})
var sched = {
    schedules: composite
}
later.date.localTime();

```

启动定时器

```
later.setInterval(()=>{
    var ssqURL = "http://api.caipiao.163.com/missNumber_trend.html?product=caipiao_client&gameEn=ssq";
    request.get(ssqURL,(err,responsed,body)=>{
        console.log(body);
    })

},sched)

```










