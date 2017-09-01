console.log("https://youtu.be/Y3zzCY62NYc");

/*----- first A iteration begin -----*/
/*

function Person(saying) {
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log("I say: ", this.saying)
}

var crockford = new Person('SEMICOLONS!!!1one1')
crockford.talk()

// This ^ is how the Class keyword actually works under the hood.

*/


/*----- first B iteration begin -----*/
/*
function Writing(toTheDOM) {
  this.toTheDOM = toTheDOM
}

Writing.prototype.something = function() {
  document.write(`<div id="on-the-paper">${this.toTheDOM}</div>`)
}

let scribble = new Writing('Something to the DOM on the paper.')
scribble.something()

*/

// When we use "new" it...
// 1) creates a new object (plain object with no props or anything)
// 2) looks at what we have called "new" on and sets the new prototype of the object to be the same as the prototype
// 3) looks again at what we called "new" on (the constructor) but calls it with the new object created in step 1 assigned to the "this" variable
// 4) returns the new object it created

/*----- second iteration begin -----*/
// build "new" as a function

function Person(saying) {
  this.saying = saying
  // return {
  //   somethingDumb: 'edge case'
  // }
}

Person.prototype.talk = function() {
  console.log("I say: ", this.saying)
}

function spawn(constructor) {
  // 1) create new object
  var obj = {}
  // 2) set the prototype of obj to the constructor prototype
  Object.setPrototypeOf(obj, constructor.prototype)
  // 3) execute the constructor with "this"
  // apply is like bind but executes the func immediately and returns it's value
  // apply takes 2 args = the object that we want to have "this", and 2) an array of the args that we want to call the func with.
  // ES6 way = let argsArray = Array.from(arguments)
  var argsArray = Array.prototype.slice.apply(arguments) /*convert args to an array*/
  // 4) return the created object
  // EDGE CASE: if the constructor actually returns something (as in somethingDumb) then it will return that instead of the object that we want so... use "|| obj"
  return constructor.apply(obj, argsArray.slice(1)) || obj
}

// var crockford = spawn(Person, 'SEMICOLONS!!!1one1')
var crockford = spawn(Person, 'SEMICOLONS!!!1one1')
console.log(
  'hello', crockford
);
crockford.talk()
