// run with `node example.js` in terminal

let talk = function() {
  console.log(this.sound)
  console.log("talk() is being called.")
}

talk()

let boromir = {
  speak: talk,
  sound: "Boromir: One does not simply walk into Mordor!"
}

let blabber = boromir.speak
blabber()

let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir()

let gollum = {
  jabber: boromir.speak,
  sound: "Gollum: My preciousss...."
}

gollum.jabber()

// boromir.speak()

// bind creates a copy of a function but where "this" is bou
