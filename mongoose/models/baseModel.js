const mongoose = require("mongoose");
const baseSchema = require("../schemas/baseSchema");
const ssq = mongoose.model('ssq',baseSchema);
const gdd11 = mongoose.model('gdd11',baseSchema);
const hljd11 = mongoose.model('hljd11',baseSchema);
const zjd11 = mongoose.model('zjd11',baseSchema);
const lnd11 = mongoose.model('lnd11',baseSchema);
const dlt = mongoose.model('dlt',baseSchema);
const pl3 = mongoose.model('pl3',baseSchema);
const x3d = mongoose.model('x3d',baseSchema);
const gxkuai3 = mongoose.model('gxkuai3',baseSchema);//广西快3
const ahkuai3 = mongoose.model('ahkuai3',baseSchema);//安徽快3
const hbkuai3 = mongoose.model('hbkuai3',baseSchema);//湖北快3
exports = module.exports = {
		'gdd11':gdd11,
		'hljd11':hljd11,
		'zjd11':zjd11,
		'lnd11':lnd11,
		'ssq':ssq,
		'dlt':dlt,
		'pl3':pl3,
		'x3d':x3d,
		'gxkuai3':gxkuai3,
		'ahkuai3':ahkuai3,
		'hbkuai3':hbkuai3
	};
