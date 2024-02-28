function findOutlier(integers) {
    let even = 0;
    let odd = 0;
    let result = 0;

    for (let i = 0; i <integers.length ; i++) {
        if (integers[i] % 2 === 0) {
            even++;
        }
        if (integers[i] %2 !== 0) {
            odd++;
        }
    }

    if (even === 1) {
        for (let i = 0; i <integers.length ; i++) {
            if (integers[i] % 2 === 0) {
                result = integers[i];
                break;
            }
        }
    }

    if (odd === 1) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                result = integers[i];
                break;
            }
        }
    }

    return result;
}