
function twoSum1(numbers, target) {

    let arr = new Array(2);

    for (let i = 0; i <numbers.length ; i++) {
        for (let j = i+1; j <numbers.length ; j++) {
            if(numbers[i]+numbers[j] === target) {
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
        }
    }
}
