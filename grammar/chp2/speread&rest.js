//spread

const slime = {
    name: 'Slime'
};

const cuteSlime = {
    name: 'slime',
    attributes: 'cute'
};

const purpleSlime = {
    name :'slime',
    attributes : 'cute',
    color : 'purple'
};
console.log(slime);
console.log(cuteSlime);
console.log(purpleSlime);

//즉 기존에 선언한 객체를 건드리지 않고 새로운 객체를 만든다
const newSlime = {
    ...purpleSlime,
    age : 20
};
console.log(newSlime);

console.log("ㅡㅡㅡㅡㅡㅡ")
//rest
//rest는 객체,배열,함수의 파라미터에서 사용기 가능하다
const purpleCuteSlime = {
    name : 'slime',
    attribute : 'cute',
    color : 'purple'
};

const {color, ...rest} = purpleCuteSlime;
console.log(color);
console.log(rest);