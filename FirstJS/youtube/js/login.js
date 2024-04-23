const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

/*function handleLoginButtonClick() {
    console.dir(loginInput);
    console.log("click");
}*/

/*function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}*/

/*const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault(); // 다음 이벤트가 실행되지 못하게 막는다.
    console.dir();
}
link.addEventListener("click",handleLinkClick);*/

const HIDDEN_CLASSNAME = "hidden";
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
    info.preventDefault(); // 어떠한 이벤트도 발생하지 않도록 막는 것.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUserName);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}










































