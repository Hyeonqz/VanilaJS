let map = new Map();

// map.set(키, 값);

map.set('1','str1');
map.set(1,'num1');
map.set(true, 'bool1');

console.log( map.get(1));
console.log( map.get('1'));
console.log( map.size);
console.log()

let john =  {
    name : "john"
};

let visitsMap = new Map();

visitsMap.set(john, 123);
console.log(visitsMap.get(john));
console.log()

//맵의 요소에 반복 작업하기
let recipeMap = new Map([
    ['cucumber',500],
    ['tomato',1000],
    ['onion',50]
    ]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}
console.log()

let map1 =  new Map([
    ['1','str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log( map1.get('1'));
console.log()

let obj = {
    name : "john",
    age : 30
};

let map3 = new Map(Object.entries(obj));
console.log( map3.get('name'));
console.log()

let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);
console.log(prices.orange);
console.log()
// 셋 은 중복을 허용하지 않는 컬렉션
let set1 = new Set();

let john1 = {name : 'john1'};
let john2 = {name : 'john2'};
let john3 = {name : 'john3'};

set1.add(john1);
set1.add(john2);
set1.add(john3);
set1.add(john1);
set1.add(john2);

console.log( set1.size);
for (let item of set1) {
    console.log(item.name);
}

function unique(arr) {
    let set0 = new Set();
    let hare = {
        name : "hare"
    };
    let krishna = {
        name : 'krishna'
    };
    set0.add(hare);
    set0.add(krishna);

    for (let item of set0) {
        console.log( item.name);
    }

}


















































