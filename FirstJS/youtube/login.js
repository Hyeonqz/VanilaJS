const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginButtonClick() {
    console.dir(loginInput);
    console.log("click");
}

loginButton.addEventListener("click",handleLoginButtonClick)

// TODO 4.1 부터 보기