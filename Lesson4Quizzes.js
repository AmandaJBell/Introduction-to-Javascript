/*
 * Programming Quiz: JuliaJames (4-1)
 *
 * Directions:
 * Write a while loop that:
 *
 * Loop through the numbers 1 to 20
 * If the number is divisible by 3, print "Julia"
 * If the number is divisible by 5, print "James"
 * If the number is divisible by 3 and 5, print "JuliaJames"
 * If the number is not divisible by 3 or 5, print the number
 *
 */

var x = 1;

var answer;

while (x <= 20) {
    // check divisibility
    if(x % 3 === 0 && x % 5 === 0) {
    	answer = "JuliaJames";
    }
    else if (x % 3 === 0) {
    	answer = "Julia";
    }
    else if (x % 5 === 0) {
    	answer = "James";
    }
    else {
    	answer = x.toString();
    }
    // print Julia, James, or JuliaJames
    console.log(answer);
    // increment x
    x += 1;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    // check value of num
    s_num = num.toString();
    s_decrement_num = (num-1).toString();
    if (num === 1) {
    	console.log(s_num + " bottle of juice on the wall! " + 
    	s_num + " bottle of juice! Take one down, pass it around... " + 
    	s_decrement_num + " bottles of juice on the wall!");
    }
    else if (num - 1 === 1) {
    	console.log(s_num + " bottles of juice on the wall! " + 
    	s_num + " bottles of juice! Take one down, pass it around... " + 
    	s_decrement_num + " bottle of juice on the wall!");
    }
    else {
    	console.log(s_num + " bottles of juice on the wall! " + 
    	s_num + " bottles of juice! Take one down, pass it around... " + 
    	s_decrement_num + " bottles of juice on the wall!");
    }
    num -= 1
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var seconds = 60;

while (seconds >= 0) {
    s = seconds.toString();
    switch (seconds) {
      case 50:
         console.log("Orbiter transfers from ground to internal power");
         break;
	  case 31:
	    console.log("Ground launch sequencer is go for auto sequence start");
	    break;
	  case 16:
	    console.log("Activate launch pad sound suppression system");
	    break;
	  case 10:
	    console.log("Activate main engine hydrogen burnoff system");
	    break;
	  case 6:
	    console.log("Main engine start");
	    break;
	  case 0:
	    console.log("Solid rocket booster ignition and liftoff!");
	    break;
	  default:
	    console.log("T-" + s + " seconds");
	}
    seconds -= 1;
}

/*
 * Programming Quiz: Changing the Loop (4-4)
 *
 * Directions: rewrite the while loop as a for loop
 * var x = 9;
 * while (x >= 1) {
 *    console.log("hello " + x);
 *    x = x - 1;
 * }
 */

for (var x = 9; x >= 1; x--) {
	console.log("hello " + x);
}

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
for (var x = 5; x < 10; x++) {
    console.log(x);
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

var solution = 1;
for (var num = 12; num > 0; num--) {
    solution = solution * num;
}
console.log(solution);

/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for (var row = 0; row <= 25; row++) {
    for (var seat = 0; seat <= 99; seat++) {
        console.log(row + "-" + seat);
    }
}
