var koa = require('koa');
var json = require('koa-json');
var app = koa();

app.use(json());

app.use(function *(next){
  
  this.body = { 'un nombre aleatoire': getRandomNumber() + ' (entre 1 et 10)' };
});
console.log("listen by port 3000");
app.listen(3000);

 function getRandomNumber() {
    return Math.floor(Math.random()*10) + 1;
 };
 

 