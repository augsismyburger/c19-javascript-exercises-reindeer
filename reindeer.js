var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var toWrite = "";
for (var i = 0; i < reindeer.length; i++) {
    toWrite += "<p>" + colors[i] + " " + reindeer[i] + "</p>";
    document.getElementById("reindeer").innerHTML = toWrite;
}
