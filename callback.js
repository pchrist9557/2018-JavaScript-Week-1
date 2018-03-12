function forEach(array, callback){
	for(var x=0;x<array.length;x++){
		callback(array[x]);
	}
}

function makePower(power){
	return function(x){
		return Math.pow(x ,power);
	}
}

function forEach(array, callback){
	for(var x=0;x<array.length;x++){
		callback();
	}
}

var students = [ 'Tom' , 'Jill' , 'Jan'];
// var message =

forEach(students, function(name){
	console.log(name, "was here");
}


// nineSquared = function() {9*9}
// var nineSquared = makeSquared(9);
// var twelveSquared = makeSquared(12);

//var squared = makePower(2);
//var cubed = makePower(3);
//var forhed = makePower(4);

//console.log("Nine squared is" , squared(9) );
//console.log("Twelve cubed is" , cubed(12) );
//console.log("Five forthed is" , forhed(5) );

