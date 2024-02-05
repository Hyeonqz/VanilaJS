/*function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}
const area = calculateCircleArea();
console.log(area);*/

const calculatedArea = (r=1) => Math.PI * r * r;
const area = calculatedArea();
console.log(area);