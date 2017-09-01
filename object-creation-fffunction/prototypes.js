console.log("https://youtu.be/YkoelSTUy7A")

// run in terminal with `node prototypes.js`
/* Class in ES6 is actually just a wrapper on top of prototypes */

/*----- first iteration begin: -----*/
/*
function talk(sound) {
  console.log(sound)
}

talk("woof")
*/


/*----- second iteration begin: -----*/

/*
function talk() {
  console.log(this)
  console.log(this.sound)
}

talk()
// this here will reference the global object which does not have a "sound" property.
*/


/*----- third iteration begin: -----*/
/*
function talk() {
  console.log(this)
  console.log(this.sound)
}


let animal = {
  // talk: talk
  // ES6 = when assigning a property that has a variable with the same name, can just say the variable.
  talk
}

animal.talk()
// JS will automatically assign "this" to whatever is on the left of the dot when it's called.
*/


/*----- fourth iteration begin: -----*/
/*
function talk() {
  console.log(this)
  console.log(this.sound)
}

let animal = {
  // talk: talk
  // ES6 = when assigning a property that has a variable with the same name, can just say the variable.
  talk
}

let cat = {
  sound: 'meow!'
}

Object.setPrototypeOf(cat, animal)
cat.talk()
// when accessing the talk property on cat JS realizes it isn't natively on the cat so it looks to it's prototypes and inherits it.
*/


/*----- fifth iteration begin: -----*/
/*
function talk() {
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
cat.talk()
dog.talk()

let prairieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}

// prototype chain
Object.setPrototypeOf(prairieDog, dog)
prairieDog.howl()
*/


/*----- sixth iteration begin: -----*/
/*
function talk() {
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}


Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
cat.talk()
dog.talk()

let prairieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}

// prototype chain
Object.setPrototypeOf(prairieDog, dog)
prairieDog.howl()
*/

/*----- seventh iteration begin: -----*/

function talk() {
  console.log(this.sound)
}

let animal = {
  talk
}

let cat = {
  sound: 'meow!'
}

let dog = {
  sound: 'woof!'
}


Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
animal.talk = function() {
  console.log("I'm a little teapot. " + this.sound)
}

cat.talk()
dog.talk()

let prairieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}

// prototype chain
Object.setPrototypeOf(prairieDog, dog)
prairieDog.howl()
