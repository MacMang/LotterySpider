// gxkuai3
/*
广西快3
湖南快3
湖北快3
*/
var gxkuai3 = require("../models/baseModel").gxkuai3;
var hbkuai3 = require("../models/baseModel").hbkuai3;
var anhuikuai3 = require("../models/baseModel").anhuikuai3;
var mtInterval = require('./MTLater');

var composite = [];//设定触发事件的事件段
var m = [];////在指定的分钟数触发事件
for(var i=0;i<60;i+=1){
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

var types = ["gxkuai3","hbkuai3","anhuikuai3"];
var objArr = [gxkuai3,hbkuai3,anhuikuai3];
for(let i=0;i<types.length;i++){
    mtInterval(sched,objArr[i],types[i]);
}
exports = module.exports = {}