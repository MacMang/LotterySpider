const x3d = require('../models/baseModel').x3d;
var mtInterval = require('./MTLater');
//3D开奖时间每晚20:30分。

var composite = [];

composite.push({
    h: [20,21],
    m: [30,32,35,40,42,43,44,45]
})

var sched = {
    schedules: composite
}
mtInterval(sched,x3d,'x3d');

exports = module.exports = {}