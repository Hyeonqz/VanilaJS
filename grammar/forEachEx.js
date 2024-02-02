const superheroes = ['아이언맨','캡틴 아메리카','토르','닥터스트레인지'];

for (let i = 0; i <superheroes.length ; i++) {
    console.log(superheroes[i]);
}

//향상된 for문
superheroes.forEach(hero => {
    console.log(hero);
})



const array0 = [1,2,3,4,5,6];
const squared0 = [];
for (let i = 0; i <array0.length; i++) {
    squared0.push(array0[i]*array0[i]);
}
console.log(squared0);

//배열의 내장함수

//map -> 변화함수
const array = [1,2,3,4,5,6,7,8];
const square = n => n*n;
const squared = array.map(square);
console.log(squared);

//indexOf -> 몇번째 원소인지 찾기
const index = superheroes.indexOf('토르');
console.log(index);

//findIndex ->
