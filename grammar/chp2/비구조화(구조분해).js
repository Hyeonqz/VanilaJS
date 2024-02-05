const object = {a:1, b:2};

const {a,b} = object;
console.log(a);
console.log(b);

function print({a,b}) {
    console.log(a);
    console.log(b);
}
print(object);

//비구조화 할당시 이름 바꾸기
const animal = {
    name : '멍멍이',
    type : '개'
};
//const nickname = animal.name;

const {name : nickname} = animal
console.log(nickname);

//배열 비구조화 할당
const array  = [1,2];
const [one,two] = array;

console.log(one);
console.log(two);

//깊은 값 비구조화 할당
const deepObject = {
    state : {
        information: {
            name : 'velopert',
            languages : ['korean','english','chinese']
        }
    },
    value:5
};

const {name,languages} = deepObject.state.information;
const {value} = deepObject;

const extracted = {
    name,
    languages,
    value
};
console.log(extracted);










































