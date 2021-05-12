var ran = Math.floor(Math.random() * 6 ) + 1 ;
var ran2 = Math.floor(Math.random()*6) +1 ;

var imgs = "images/"+"dice" + ran + ".png";
var imgs2 = "images/"+"dice" + ran2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src",imgs);
document.querySelectorAll("img")[1].setAttribute("src",imgs2);

if (ran > ran2) {
  document.querySelector("h1").innerHTML = "Winner PLayer 1 ";
} else if (ran < ran2) {
  document.querySelector("h1").innerHTML = "Winner PLayer 2";
} else {
  document.querySelector("h1").innerHTML = "It's a DRAW ";

}
