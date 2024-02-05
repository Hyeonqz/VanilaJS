class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    //class내부에 함수를 선언하면, 자동으로 prototype에 등록이 된다
    say() {
        console.log(this.sound);
    }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고��이', '야옹이', '야옹');

dog.say();
cat.say();

//클래스의 상속
class Dog extends Animal {
    constructor(name,sound) {
        super('개',name,sound);
    }
}

class Cat extends Animal {
    constructor(name,sound) {
        super('고양이',name,sound);
    }
}

const dog1 = new Dog("멍멍이","멍멍");
const cat1 = new Cat("야옹이","야옹");

dog1.say();
cat1.say();