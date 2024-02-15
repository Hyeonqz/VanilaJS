let john = {
    name : 'john'
};
let map = new Map();
map.set(john,"...");
john = null;

console.log(john);

for (let obj of map.keys()) {
    console.log(JSON.stringify(obj));
}
console.log(map.size);

let weakMap = new WeakMap();
let obj1 = {};
weakMap.set(obj1, "ok");

let visitsCountMap = new Map();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count+1);
}

let john1 = {
    name : "john1"
}
countUser(john1);
john1 = null;
console.log()

let cache = new WeakMap();

function process(obj) {
    if (!cache.has(obj)) {
        let result = obj;
        cache.set(obj, result);
    }
    return cache.get(obj);
}

let obj = {};

let result1 = process(obj);
let result2 = process(obj);

obj = null;
console.log(cache.size);












































