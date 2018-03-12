
var printVerse = function(num){

	var name = "bottles";
	if(num === 1) { name = "bottle"; }

	console.log(num + " " + "bottles of beer on the wall.");
	console.log(num + " " + "bottles of beer");
	console.log("Take one down, you pass it around.");
	return num;
	num--;
	console.log(num + "bottles of beer on the wall.\n");
	return num;
}

for (var x = 99; x > 0, x- -){
	printVerse(x);
}

