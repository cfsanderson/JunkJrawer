console.log('https://youtu.be/Tllw4EPhLiQ');
// cmd
class Mammal {
  constructor(sound) {
    // underscore is a convention to show that it is a private member but in reality it is not b/c "JS DOES NOT REALLY HAVE CLASSES!!!" - @mpjme
    this._sound = sound
  }

  talk() {
    return this._sound
  }
}

class Dog extends Mammal {
  constructor() {
    super('wooofoffflllleeeeee')
    // super calls the constructor of the inherited class (Mammal)
  }
}

// let fluffykins = new Mammal('woof!')
let fluffykins = new Dog()
// comment out line below with Quokka on to see changes
// fluffykins._sound = 'meow'
let a = fluffykins.talk()
a

let b = typeof Dog
b

let c = Dog.prototype.talk.bind({
  _sound: 'ROAR'
})()
c

let d = Dog.prototype.isPrototypeOf(fluffykins)
d
