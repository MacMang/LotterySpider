const pl3 = require('../models/baseModel').pl3;
var mtInterval = require('./MTLater');
//排列3
var composite = [];
// //配置每天22点跟新数据
composite.push({
    h: [20,21],
    m: [30,35,40,42,43,44,45]
})

var sched = {
    schedules: composite
}
mtInterval(sched,pl3,'pl3');

exports = module.exports = {}