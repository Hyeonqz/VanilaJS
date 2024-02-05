const dog = {
    name : '멍멍이'
};

function getName(animal) {
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

const namelessDog = {
    name : ''
};

function getNames(animal) {
    const name = animal && animal.name;
    if(!name) {
        return 'no name animal';
    }
    return name;
}
const names = getNames(namelessDog);
console.log(names);

//위 코드 단축시키기
/*const namelessDog = {
  name: ''
};
function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}
const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
* */