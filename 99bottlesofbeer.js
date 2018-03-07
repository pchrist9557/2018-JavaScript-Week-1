#!/usr/bin/env node

var item = "bottles";
var number = 99;
while (number > 0) {
    console.log(number + " " + item + " of beer on the wall");
    console.log(number + " " + item + " of beer,");
    console.log("Take one down, pass it around,");
    number = number - 1;
    if (number > 1) {
        console.log(number + ", " + number + " of beer on the wall.");
    } else if(number == 1) {
        console.log(number + " bottle of beer on the wall."); 
    } else {
        console.log("No more " + item + " of beer on the wall.");
    }
}
