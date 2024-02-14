//splice
let arr = ["I", "study", "go", "Home"];
console.log(arr.length);
arr.splice(0,3, "Let's go");
let removed = arr.splice(0,1);
console.log(removed);
console.log()

//slice
let arr1 = ["a", "b", "c", "d", "e"];
console.log( arr1.slice(1,3));
console.log( arr1.slice(-2));

//forEach로 반복작업하기
arr.forEach(function(item,index,array) {

});

//find
let result = arr.find(function(item,index,array) {

})

let users = [
{id:1, name : 'jin'},
{id:2, name : "keu"}
];
let user = users.find(item=>item.id===1);
console.log(user.name);
console.log()

let lengths = ["1","2","3","4","5","6"].map(item=>item.length);
console.log(lengths);