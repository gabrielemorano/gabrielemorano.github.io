randomNumber = Math.floor(Math.random()*2+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("logo").style.display = "inline";
		document.getElementById("logor").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("logo").style.display = "none";
		document.getElementById("logor").style.display = "inline";
	}

}