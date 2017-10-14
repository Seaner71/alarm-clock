
var time = document.querySelector('#clock')
var date= new Date();
// ternary operators instead of later if statements
var hrs=date.getHours(); hrs < 10? hrs ='0'+hrs: hrs = date.getHours();
var mins=date.getMinutes(); mins < 10? mins ='0'+mins: mins = date.getMinutes();
var secs= date.getSeconds(); secs < 10? secs ='0'+secs: secs = date.getSeconds();

var back = document.querySelector('body')

back.className = 'dawn'

time.innerHTML= `${hrs}:${mins}:${secs}`;
