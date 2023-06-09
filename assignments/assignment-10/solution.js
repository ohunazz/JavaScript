// Part-1 //

var randomSeconds = Math.floor(Math.random() * 86400);
console.log(randomSeconds);

var hours = Math.floor(randomSeconds / 3600);
var leftSeconds = randomSeconds % 3600;
var minutes = leftSeconds / 60;
var seconds = leftSeconds % 60;
