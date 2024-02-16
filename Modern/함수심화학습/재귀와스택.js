console.log(Math.pow(2,2));
console.log(Math.pow(2,10));
console.log()
function pow(x,n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *=x;
    }
    return result;
}

console.log(pow(2,10));

function pow2(x,n) {
    if(n==1) {
        return x;
    } else {
        return x*pow2(x,n-1);
    }
}

function pow3(x,n) {
    return (n==1) ? x : ( x*pow3(x,n-1));
}

console.log("----------------------------------------------------------------");

function sum1(n) {
    let sum = 0;
    for (let i = 0; i <n ; i++) {
        sum +=i;
    }
    return sum;
}

function sum2(n) {
    if(n==1) {
        return n;
    } else {
        return n+sum2(n-1);
    }
}