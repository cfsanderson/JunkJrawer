let name
const getYourName = () => {
  name = prompt("What is your name?");
}
getYourName()

const printYourName = () => {
  if(name){
    // Set text in an HTML element with the id sayHello
    // You concatenate (combine) strings with +
    document.getElementById("sayHello").innerHTML = "Hello " + name ;
  } else {
    // Alert opens a popup that contains a message
    alert("Please Enter Your Name Next Time");
  }
}
printYourName()

// If performs different actions depending on conditions

let numbersHeader = "<h3>Numbers in Javascript</h3>"
document.write(numbersHeader)

// Maths
document.write("5 + 4 = ", 5 + 4, "<br />")
document.write("5 + 4 = " + 5 + 4, "<br />") /* concats mistake */
document.write("5 - 4 = ", 5 - 4, "<br />")
document.write("5 * 4 = ", 5 * 4, "<br />")
document.write("5 / 4 = ", 5 / 4, "<br />")
document.write("5 % 4 = ", 5 % 4, "<br />")

document.write("Max Num = ", Number.MAX_VALUE, "<br />")
document.write("Min Num = ", Number.MIN_VALUE, "<br />")

precisionTest1 = 0.1000000000000001;
document.write(precisionTest1 + 0.1000000000000001, "<br />")

precisionTest2 = 0.10000000000000001;
document.write(precisionTest2 + 0.10000000000000001, "<br />")

let balance1 = 1563.87
document.write("Monthly Payment: ", (balance1 / 12).toFixed(2), "<br />")

let balance2 = 1563.87
document.write("Monthly Payment: ", (balance2 / 12), "<br />")

// operators
let randNum = 5
document.write("randNum++ = ", randNum++, "<br />")
document.write("++randNum = ", ++randNum, "<br />")
document.write("randNum-- = ", randNum--, "<br />")
document.write("--randNum = ", --randNum, "<br />")
document.write("randNum1 += 5 = ", randNum += 5, "<br />")
document.write("randNum1 -= 5 = ", randNum -= 5, "<br />")
document.write("randNum1 *= 5 = ", randNum *= 5, "<br />")
document.write("randNum1 /= 5 = ", randNum /= 5, "<br />")
// Order of ops
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br />")
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br />")

// built-in numbers
document.write("Math.E = ", Math.E, "<br />")
document.write("Math.PI = ", Math.PI, "<br />")

// built-in math methods
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

// randoms
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>"); /* */

document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");

// Convert strings to numbers
document.write("Converted String : ", Number("3.14"), "<br />");

document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");

/*---------- STRINGS ----------*/
let randStr = "A long " + "string that " + "goes on and on";

// String length
document.write("String Length : ", randStr.length + "<br/>");

document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br/>");

// Return the value using a start and end index
document.write(randStr.slice(19, 23) + "<br/>");

// Return everything after the start index
document.write(randStr.slice(19) + "<br/>");

// Return the value using the start index and length
document.write(randStr.substr(19, 4) + "<br/>");

// Replace a string
document.write(randStr.replace("and on", "forever") + "<br/>");

// Get character at an index
document.write("At Index 2 : ", randStr.charAt(2) + "<br/>");

// Split a string into an array
let randStrArray = randStr.split(" ");

// Trim white space
randStr = randStr.trim();

// Convert to uppercase
document.write(randStr.toUpperCase() + "<br/>");

// Convert to lowercase
document.write(randStr.toLowerCase() + "<br/>");

// Styling with JS
let strToStyle = "Random String";

document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("pink"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("5em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
document.write("Strike : ", strToStyle.strike(), "<br />");
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");

/*---------- CONDITIONALS ----------*/
// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && || !

let age = 8;

if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}

document.write("true || false = ", true || false, "<br />");
document.write("!true = ", ! true, "<br />");
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");

// Switch is used to match a limited number of options
switch(age) {
  case 5 :
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;

  case 7 :
    document.write("Go to 1st Grade<br />");
    break;

  default :
    document.write("Subtract 5 from your age<br />");
}

// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
let canIVote = (age >= 18) ? true : false;

document.write("Can I Vote? : ", canIVote, "<br />");
