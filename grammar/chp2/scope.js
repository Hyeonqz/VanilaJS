// global 스코프
// Function 스코프
// Block 스코프

const value = 'hello';
function myFunction() {
    console.log('myFunction');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction:');
    const value = 'bye';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope:');
console.log(value);
