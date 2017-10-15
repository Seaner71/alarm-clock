currentTime = function() {
var time = document.querySelector('#clock')
var date= new Date();
// ternary operators instead of later if statements
var hrs=date.getHours(); hrs < 10? hrs ='0'+hrs: hrs = date.getHours();
var mins=date.getMinutes(); mins < 10? mins ='0'+mins: mins = date.getMinutes();
var secs= date.getSeconds(); secs < 10? secs ='0'+secs: secs = date.getSeconds();

  var hexTime =  '#' +hrs+mins+secs;
  // var normalTime = `${hrs}:${mins}:${secs}`
  time.innerHTML = hexTime ;
}
// var color = document.querySelector("#back-ground");
// color.style.background = `linear-gradient(#000 ,#a8d, #F8B04F)`;

setInterval(currentTime, 1000);

function randHex() {
    var color = document.querySelector("#back-ground");
    // empty array to contain 3hex colors and hex
    var hexArray =[]
    const hexChars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    for (let i =0; i <3; i++) {
    let result = '#';
    // Random Hex generator
      for (let i =0; i < 6; i++) {
      var randIndex = Math.floor(Math.random()* hexChars.length);
      result += hexChars[randIndex];
    }
    // push each hex created into array
    hexArray.push(result)
    }
    // set backround to linear-gradient or radial-gradient randomly using values from hexArray
    gradientArray =['linear-gradient','radial-gradient'];
    randGradient = gradientArray[Math.floor(Math.random()*2)];
    color.style.background = `${randGradient}(${hexArray[0]},${hexArray[1]},${hexArray[2]})`;
}
setInterval(randHex, 8000)
