const dlt = require('../models/baseModel').dlt;
var mtInterval = require('./MTLater');
//双色球
var composite = [];
var m = [];
for(var i=1;i<=60;){
    m.push(i);
    i+=1;
}
// //配置每天22点跟新数据
composite.push({
    dw:[2,4,7],
    h: [21,22],
    m: m
})

var sched = {
    schedules: composite
}
mtInterval(sched,dlt,'dlt');

exports = module.exports = {}