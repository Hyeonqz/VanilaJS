let userName = 'John';
function showMessage() {
    console.log('hihi');
    console.log('hello ' + userName);
}
showMessage();

function showMessage2(from,text) {
    from = '*' + from + '*';
    console.log(from + ': ' + text);
}

let from = 'Ahn';
showMessage2(from, 'hello');
console.log(from);

function minus(a,b) {
    if(a>b) return b;
    if(a<b) return a;
}