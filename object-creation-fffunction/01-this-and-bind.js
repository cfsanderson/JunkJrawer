// from "bind and this - Object Creation in JS P1 - https://youtu.be/GhbhD1HR5vk"
// bind & this
let dog = {
  sound: "woof",
  talk: function() {
    document.write(`<p>${this.sound}</p>`)
  }
}

dog.talk() /* makes a "woof" paragraph */
let talkFunction = dog.talk /* assigns the function to a variable but  */
let boundFunction = talkFunction.bind(dog)
talkFunction() /* undefined */
boundFunction()

// functions are values like any other and cand be stuffed into anything else YAY++
// in object oriented language the concept of "this" is essential but NOT in functional based languages
// Javascript is OO but has functional elements that it inherits from functional programming
// In a function, "this" does not refer to the context where it is defined, it refers to the context where it is being called.
//
// always refers to the
