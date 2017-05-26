var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

for (var i = 0, x = reindeer.length; i < x; i++) {
	hohohoElement.innerHTML += "<h2>" + colors[i] + " " + reindeer[i] + "</h2>" ;
}