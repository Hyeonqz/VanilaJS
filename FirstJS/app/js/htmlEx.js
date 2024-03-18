const hellos = document.getElementsByName("hello");
const title = document.getElementsByTagName("hello");

const title1 = document.querySelector(".hello h1") // 여러개를 호출해도 첫번째 elemetns 만 가져온다
const ex = document.getElementById("hello");
const title2 = document.querySelectorAll(".hello h1")
console.log(title1);
console.log(ex);
console.log(title2);

console.log(title);
console.log(hellos);

