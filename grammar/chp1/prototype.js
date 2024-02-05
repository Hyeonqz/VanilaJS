
//객체 생성자를 사용할 때는 보통 함수 이름은 대문자로 한다.
//새로운 객체를 생성할 때는 new 키워드를 사용한다


//프로토타입 => .prototype.[원하는키] = 코드
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);


//객체 생성자 상속받기

function Dog(name,sound) {
    Animal.call(this,'개',name,sound);
}

Dog.prototype = Animal.prototype;

function Cat(name,sound) {
    Animal.call(this,'고양이',name,sound);
}
Cat.prototype = Animal.prototype;

const dog1 = new Dog('멍멍이','멍멍');
const cat1  = new Cat('야옹이','야옹');
dog1.say();
cat1.say();