const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color="blue";
  console.log("title was clicked");
}

function handleMouseEnter() {
  title.innerHTML = "mouse is here";
}

function handleMouseLeave() {
  title.innerHTML = "mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("복사가 완료되었습니다.");
}

function handleWindowPaste() {
  alert("붙여넣기를 합니다.");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("paste",handleWindowPaste);
window.addEventListener("online",handleWindowOnline);
