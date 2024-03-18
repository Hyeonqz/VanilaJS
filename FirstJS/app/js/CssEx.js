const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color; // 불변의 값
  let newColor; // 가변성 값
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass) === "blue") {
    h1.classList.remove(clickedClass);
  } else {
    h1.className = clickedClass
  }
  h1.classList.add(clickedClass);
}
h1.addEventListener("click",handleTitleClick);

const h2 = document.querySelector("div.hello:first-child h1");

function handleTitleClick1() {
  const clickedClass = "clicked1";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click",handleTitleClick1);
