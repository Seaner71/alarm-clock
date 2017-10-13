var dat= new Date();
var hr=dat.getHours();
var min=dat.getMinutes();
var sec=dat.getSeconds();



var time = document.querySelector('#clock')
currentTime = function() {
  time.innerHTML = Date();
}


setInterval(currentTime, 1000)
