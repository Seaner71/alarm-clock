currentTime = function() {
var time = document.querySelector('#clock')
var date= new Date();
// ternary operators instead of later if statements
var hrs=date.getHours(); hrs < 10? hrs ='0'+hrs: hrs = date.getHours();
var mins=date.getMinutes(); mins < 10? mins ='0'+mins: mins = date.getMinutes();
var secs= date.getSeconds(); secs < 10? secs ='0'+secs: secs = date.getSeconds();

// Random Hex generator
var hexTime =  '#' +hrs+mins+secs;
  // var normalTime = `${hrs}:${mins}:${secs}`
  time.innerHTML = hexTime;
}


setInterval(currentTime, 1000);

function randHex() {
    var color = document.querySelector("#back-ground");
    const hexChars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let result = '#';
    for (let i =0; i < 6; i++) {
      var randIndex = Math.floor(Math.random()* hexChars.length);
      result += hexChars[randIndex];
    }
    color.style.backgroundColor =result;
}
setInterval(randHex, 10000)
// change background image based on time of day
/*
if (mins === '09') {
color.style.classList ='.dawn'
time.innerHTML = normalTime + '<br>' + "Good Afternoon!";
} else {
color.style.classList = '';
}
*/
