// 자바크립트는 함수 지향 언어이다.

function sayHiBye(fName, lName) {
    function getFullName() {
        return fName + " " + lName;
    }

    console.log(getFullName());
}
sayHiBye("jin","kyu");
console.log()

let phrase;