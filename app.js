const Koa = require('koa');
var app = new Koa();
const index = require("./mongoose/controllers/index");
app.listen(3001);