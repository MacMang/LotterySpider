const Schema = require("../config/mongoConfig")

const baseSchema = new Schema({
    data: Object, 
    hotCold: Object,
    result: Number,
    total: Number
})

epxorts = module.exports = baseSchema;