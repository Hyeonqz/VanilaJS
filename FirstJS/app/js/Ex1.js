const player = {
  name : "kyu",
  sayHello : function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you");
  },
};

player.sayHello("jin");
player.sayHello("hyun");


const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age))