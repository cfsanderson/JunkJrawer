console.log('https://youtu.be/CDFN1VatiJA');

/*---- normal implementation and usage of Object.create -----*/
/*
const cat = {
  makeSound: function() {
    console.log(this.sound)
  }
}

const mark = Object.create(cat)
mark.sound = 'meweweuuuffff'
mark.makeSound()

const waffles = Object.create(cat)
waffles.sound = 'mmrrrrroooowwwrr'
waffles.makeSound()

// Object.create creates a new Object with the prototype set to a certain object.
console.log(
  'Is mark a cat?: ',
  cat.isPrototypeOf(mark)
)

// Why does Object.create exist???
// Object.create is more natural to the prototype model than the "new" keyword.
// Douglas Crockford wrote Object.create because he was grumpy about how prototype worked.

*/


/*---- rewriting Object.create from scratch -----*/
/*
const cat = {
  makeSound: function() {
    console.log(this.sound)
  }
}

function objectCreate(proto) {
  const obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}

const mark = objectCreate(cat)
mark.sound = 'meweweuuuffff'
mark.makeSound()

const waffles = objectCreate(cat)
waffles.sound = 'mmrrrrroooowwwrr'
waffles.makeSound()

// Object.create creates a new Object with the prototype set to a certain object.
console.log(
  'Is mark a cat?: ',
  cat.isPrototypeOf(mark)
)
*/

/*---- Object.create real-life patterns -----*/

const cat = {
  init: function(sound) {
    this.sound = sound
    return this
  },
  makeSound: function() {
    console.log(this.sound)
  }
}

const mark =
  Object.create(cat).init('meweweuuuffff')
mark.makeSound()

const waffles =
  Object.create(cat).init('mmrrrrroooowwwrr')
waffles.makeSound()

// Object.create creates a new Object with the prototype set to a certain object.
console.log(
  'Is mark a cat?: ',
  cat.isPrototypeOf(mark)
)
