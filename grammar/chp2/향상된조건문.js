function isAnimal0(text) {
    return (
        text ==='cat' || text ==='dog' || text ==='turtle' || text ==='people'
    );
}

console.log(isAnimal0('cat'));
console.log(isAnimal0('dog'));

function isAnimal1(name) {
    const animals = ['cat', 'dog', 'turtle', 'people'];
    return animals.includes(name); //animals에서 name이 있는지 확인
}
console.log(isAnimal1('cat'));


//화살표 함수형
const isAnimal2 = name => ['cat', 'dog', 'turtle', 'people'].includes(name);
console.log(isAnimal2('cat'));

//값에 따라 다른 결과물을 반환해야 할 때
function getSound(animal) {
    if(animal==='dog') {
        return 'mangmang';
    }
    if(animal==='cat') {
        return 'yaongyaong';
    }
    if(animal==='turtle') {
        return 'wookwook';
    }
    if(animal==='people') {
        return 'hi?';
    }
}
console.log(getSound('cat'));
console.log(getSound('dog'));

//향상된 값에 따라 다른 결과물 반환
function getSound2(animal) {
    const sounds = {
        dog:'mangmang',
        cat: 'yaongyaong',
        turtle: 'wookwook',
        people: 'hi?'
    };
    return sounds[animal] || '...?';
}
console.log(getSound2('cat'));
console.log("------")

//값에 따라 실행해야하는 코드 구문이 다를 때는?
function makeSound(animal) {
    const tasks = {
        dog() {
            console.log('mangmang');
        },
        cat() {
            console.log('yaongyaong');
        },
        turtle() {
            console.log('wookwook');
        },
        people() {
            console.log('hi?');
        }
    };
    if(!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}
makeSound('dog');














