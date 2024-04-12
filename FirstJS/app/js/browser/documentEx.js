
// 클래스 이름 로 찾기
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// 태그 이름으로 찾기
const title = document.getElementsByTagName("h1");
console.log(title);

// 쿼리 셀렉터 -> 중복 일시 맨처음 것만 가져옴
const title2 = document.querySelector(".hello h1");
const title0 = document.querySelector("#hello");

title2.innerText = "I m so hungry";

console.log(title0);
console.log(title2);

// 쿼리 셀렉터 전체 가져오기
const title3 = document.querySelectorAll(".hello h1");
console.log(title3);

const title4 = document.querySelector(".hello:first-child h1");
console.log(title4);

title4.style.color = "white";


function handleTitleClick() {
    console.log("title4 was clicked!");
}
title4.addEventListener("click",handleTitleClick); // 함수 괄호는 넣으면 안됌.

console.dir(title4);

function handleMouserEnter() {
    title4.innerText = "Mouse is here";
}

title4.addEventListener("mouseenter", handleMouserEnter);

function handlerMouseLeave() {
    title4.innerHTML = "Moues is gone";
}
title4.addEventListener("mouseleave", handlerMouseLeave);


function handleWindowResie() {
    document.body.style.backgroundColor = "wheat";
}

window.addEventListener("resize",handleWindowResie);
window.addEventListener("copy",handleWindowCopy);













































