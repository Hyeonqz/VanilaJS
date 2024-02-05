const array = [];

let text = array.length===0? "배열이 비었습니다.":'배열이 비어있지 않습니다.';
console.log(text);

//조건 ? true일때 : fasle일때

const condition1 = false;
const condition2 = false;

const value = condition1?
    '와우!'
    :condition2?
        'blabla'
        :'foo';
console.log(value);