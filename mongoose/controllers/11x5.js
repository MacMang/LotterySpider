
var gdd11 = require("../models/baseModel").gdd11;
var hljd11 = require("../models/baseModel").hljd11;
var zjd11 = require("../models/baseModel").zjd11;
var lnd11 = require("../models/baseModel").lnd11;
var mtInterval = require('./MTLater');

var composite = [];//设定触发事件的事件段
var m = [];////在指定的分钟数触发事件
for(var i=3;i<60;i+=10){
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
// later.date.localTime();

var types = ["gdd11","hljd11","zjd11","lnd11"];
var objArr = [gdd11,hljd11,zjd11,lnd11];
for(let i=0;i<types.length;i++){
    mtInterval(sched,objArr[i],types[i]);
}
exports = module.exports = {}