function findOdd(A) {

    let list = [];
    for (let i = 0; i <A.length ; i++) {
        let num = A[i];

        if(list.includes(num)) {
            list.splice(list.indexOf(num), 1);
        } else {
            list.push(num);
        }
    }
    return list[0];
}