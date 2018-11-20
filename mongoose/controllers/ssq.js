// 双色球控制器,实现双色球数据抓取
const ssq = require('../models/baseModel').ssq;
var mtInterval = require('./MTLater');
//双色球
var composite = [];
var m = [];
for(var i=1;i<=60;){
    m.push(i);
    i+=3;
}
// //配置每天22点跟新数据
composite.push({
    h: [21,22],
    dw:[1,3,5],
    m: m
})

var sched = {
    schedules: composite
}
mtInterval(sched,ssq,'ssq');
exports = module.exports = {}



















