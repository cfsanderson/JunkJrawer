document.write(`<h3>Get Your Name</h3>`, "<br />");
let name;
const getYourName = () => {
  name = prompt("What is your name?");
};
// getYourName()

const printYourName = () => {
  if (name) {
    // Set text in an HTML element with the id sayHello
    // You concatenate (combine) strings with +
    document.getElementById("sayHello").innerHTML =
      `Hello ${  name  }. Get to work!`;
  } else {
    // Alert opens a popup that contains a message
    alert("Please Enter Your Name Next Time");
  }
};
// printYourName()

// If performs different actions depending on conditions

const numbersHeader = "<h3>Numbers in Javascript</h3>";
document.write(numbersHeader);

document.write(`<h3>Math Stuff</h3>`, "<br />");
document.write("5 + 4 = ", 5 + 4, "<br />");
document.write(`5 + 4 = ${  5  }${4}`, "<br />"); /* concats mistake */
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");

document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");

precisionTest1 = 0.1000000000000001;
document.write(precisionTest1 + 0.1000000000000001, "<br />");

precisionTest2 = 0.10000000000000001;
document.write(precisionTest2 + 0.10000000000000001, "<br />");

const balance1 = 1563.87;
document.write("Monthly Payment: ", (balance1 / 12).toFixed(2), "<br />");

const balance2 = 1563.87;
document.write("Monthly Payment: ", balance2 / 12, "<br />");

document.write(`<h3>Operators</h3>`, "<br />");
let randNum = 5;
document.write("randNum++ = ", randNum++, "<br />");
document.write("++randNum = ", ++randNum, "<br />");
document.write("randNum-- = ", randNum--, "<br />");
document.write("--randNum = ", --randNum, "<br />");
document.write("randNum1 += 5 = ", (randNum += 5), "<br />");
document.write("randNum1 -= 5 = ", (randNum -= 5), "<br />");
document.write("randNum1 *= 5 = ", (randNum *= 5), "<br />");
document.write("randNum1 /= 5 = ", (randNum /= 5), "<br />");

document.write(`<h3>Order of Operations</h3>`, "<br />");

document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br />");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br />");

document.write(`<h3>Built-in Numbers</h3>`, "<br />");

document.write("Math.E = ", Math.E, "<br />");
document.write("Math.PI = ", Math.PI, "<br />");

document.write(`<h3>Built-in Methods</h3>`, "<br />");

document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10, 5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10, 5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4, 2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

document.write(`<h3>Randoms</h3>`, "<br />");

document.write(
  "Random # (1-10) = ",
  Math.floor(Math.random() * 10 + 1),
  "<br/>"
);

document.write(`<h3>Convert strings to numbers</h3>`, "<br />");

document.write("Converted String : ", Number("3.14"), "<br />");
document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");

/* ---------- STRINGS ----------*/
document.write(`<h3>Strings</h3>`, "<br />");

let randStr = "A long " + "string that " + "goes on and on";

// String length
document.write("String Length : ", `${randStr.length  }<br/>`);
document.write('Index for "goes" : ', randStr.indexOf("goes"), "<br/>");

// Return the value using a start and end index
document.write(`${randStr.slice(19, 23)  }<br/>`);

// Return everything after the start index
document.write(`${randStr.slice(19)  }<br/>`);

// Return the value using the start index and length
document.write(`${randStr.substr(19, 4)  }<br/>`);

// Replace a string
document.write(`${randStr.replace("and on", "forever")  }<br/>`);

// Get character at an index
document.write("At Index 2 : ", `${randStr.charAt(2)  }<br/>`);

// Split a string into an array
const randStrArray = randStr.split(" ");

// Trim white space
randStr = randStr.trim();

// Convert to uppercase
document.write(`${randStr.toUpperCase()  }<br/>`);

// Convert to lowercase
document.write(`${randStr.toLowerCase()  }<br/>`);

document.write(`<h3>Styling with JS</h3>`, "<br />");
const strToStyle = "Random String";

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

/* ---------- CONDITIONALS ----------*/
document.write(`<h3>Conditionals</h3>`, "<br />");
// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && || !

const age = 8;

if (age >= 5 && age <= 6) {
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}

document.write("true || false = ", true || false, "<br />");
document.write("!true = ", !true, "<br />");
document.write('"5" == 5 = ', "5" == 5, "<br />");
document.write('"5" === 5 = ', "5" === 5, "<br />");

// Switch is used to match a limited number of options
switch (age) {
  // two cases means either one will work..
  case 5:
  case 6:
    document.write("Go to Kindergarten<br />");
    break;

  case 7:
    document.write("Go to 1st Grade<br />");
    break;

  default:
    document.write("Subtract 5 from your age<br />");
}

// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
const canIVote = age >= 18 ? true : false;

document.write("Can I Vote? : ", canIVote, "<br />");

// Looping
document.write(`<h3>Looping</h3>`, "<br />");

document.write(`<ul id="unorderedList1"></ul>`, "<br />");
const list1 = document.getElementById("unorderedList1");
let i = 1;
while (i <= 10) {
  list1.innerHTML += `<li>${i}</li>`;
  i++;
}

// do {
//   let guess = prompt("Guess a number between 1 and 20")
// } while (guess != 15)
//
// alert("You guessed 15!");

// for loop
document.write(`<ul id="unorderedList2"></ul>`, "<br />");
const list2 = document.getElementById("unorderedList2");

for (j = 0; j <= 20; j++) {
  if (j % 2 === 0) {
    continue;
  }

  if (j === 15) {
    break;
  }
  list2.innerHTML += `<li>${j}</li>`;
}

// for in loop

document.write(`<ul id="unorderedList3"></ul>`, "<br />");
const list3 = document.getElementById("unorderedList3");

const customer = { name: "Bob Thomas", address: "123 Main St.", balance: 50.5 };

for (const k in customer) {
  list3.innerHTML += `<li>${customer[k]}</li>`;
}

// Arrays
document.write(`<h3>Arrays</h3>`, "<br />");

const tomSmith = ["Tom Smith", "456 Main St.", 120.5];

document.write("1st Index = ", tomSmith[0], "<br />");
document.write("2nd Index = ", tomSmith[1], "<br />");

tomSmith[3] = "tSmith@aol.com";

tomSmith.splice(2, 1, "Pittsburgh", "PA");
tomSmith.splice(4, 1);

document.write(`<p>Array : ${tomSmith.toString()}</p>`);
document.write(`<p>Array : ${tomSmith.valueOf()}</p>`);
document.write(`<p>Array : ${tomSmith.join(", ")}</p>`);

delete tomSmith[3];

document.write(`<p>${tomSmith.sort()}</p>`, "<br />");

const numbers = [4, 3, 9, 1, 20, 43];
numbers.sort((x, y) => {return x - y})

document.write(`<p>Number Array ${numbers.join(", ")}</p>`);

const combinedArray = numbers.concat(tomSmith);

tomSmith.pop();
tomSmith.push("555-1212", "US");
// delete first item
tomSmith.shift();
// add items to front of array
tomSmith.unshift("Tom Smithington");

document.write(`<ul id="unorderedList4"></ul>`);
const list4 = document.getElementById("unorderedList4");

for (let l = 0; l < tomSmith.length; l++) {
  list4.innerHTML += `<li>${tomSmith[l]}</li>`;
}

// Functions
document.write(`<h3>Functions (34:42)</h3>`, "<br />");

function inArray(arrayToCheck, value) {
  for (i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] === value) {
      return true;
    }
  }
  return false;
}
const randArray = [1, 2, 3, 4, 5];

document.write(`<p>In array?: ${inArray(randArray, 5)}</p>`, "<br />");

function times2(num) {
  const two = 2;
  return num * two;
}

function times3(num) {
  return num * 3;
}

function multiply(func, num) {
  return func(num);
}

document.write(`<p>2 * 15 = ${multiply(times2, 15)}</p>`, "<br />");
document.write(`<p>3 * 15 = ${multiply(times3, 15)}</p>`, "<br />");

let triple = function(num) {
  return num * 3;
};

document.write(`<p>3 * 45 = ${multiply(triple, 45)}</p>`, "<br />");

function getSum() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

document.write(`<p>Sum = ${getSum(1, 2, 3, 4, 5, 6)}</p>`, "<br />");

function doubleArray(arr) {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

document.write(
  `<p>Array doubled = ${doubleArray([1, 2, 3, 4, 5])}</p>`,
  "<br />"
);

function factorial(num) {
  if(num <= 1) {
    return 1
  } 
    return num * factorial(num - 1)
  
}

document.write(`<p>Factorial of 4 = ${factorial(4)}</p>`, "<br />");

/* ----- Event Handling -----*/
document.write(
  `<a href='https://youtu.be/fju9ii8YsGs?t=43m50s' target='_blank'><h3>Event Handling (34:42)</h3><a/>`,
  "<br />"
);
