const dog = {
    name : '강아지',
    age : 2
};

console.log(dog.name);
console.log(dog.age);

const iron = {
    name : '토니',
    actor : '로버트 다우니',
    alias : '아이언맨'
}
const iron1 = {
    name : '토니2',
    actor : '로버트 다우니2',
    alias : '아이언맨2'
}

console.log(iron)
console.log(iron1)

//함수에 객체를 파라미터로 받기
function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다`;
    console.log(text);
}
print(iron);
print(iron1);