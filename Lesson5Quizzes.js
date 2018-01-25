/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here

function laugh() {
    return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

 function laugh(num) {
    var laughs = "";
 	for (var i = num; i > 0; i--) {
 		laughs = laughs + "ha";
 	}
 	return laughs + "!"
 }
console.log(laugh(3));

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(size) {
    var triangle = "";
    for (var i = 1; i <= size; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    laughs = "";
    for (var i = 1; i <= num; i++) {
        laughs += "ha";
    }
    return laughs + "!";
}

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here

var cry = function cry () {
    return "boohoo!";
};

cry();

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function laugh(num) {
    laughs = "";
    for (var i = 1; i <= num; i++) {
        laughs += "ha";
    }
    return laughs + "!";
});
