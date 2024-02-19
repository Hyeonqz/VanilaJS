let countBits = function(n) {

    let count = 0;
    let binaryString = n.toString(2); //이진수로 변환

    for (let i = 0; i <binaryString.length ; i++) {

        if( binaryString[i] === '1') {
            count++;
        }
    }
    return count;
};

// 솔루션2
