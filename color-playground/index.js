let name

const getYourName = () => {
  name = prompt("What is your name?");
}
getYourName()

const printYourName = () => {
  if(name){
    document.getElementById("sayHello").innerHTML = "Hello " + name + " :)"
  } else {
    alert("Please Enter Your Name Next Time");
  }
}
printYourName()
