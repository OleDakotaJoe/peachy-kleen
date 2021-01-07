var divisor = document.getElementById("divisor");
var comparisonWidth = document.getElementById("comparison").clientWidth;

function moveDivisor(e) {
	divisor.style.width = (e.offsetX * 100) / comparisonWidth + "%";
}
