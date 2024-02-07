function squareDigits(num) {

    let inputNum = num + "";
    let digits = inputNum.split("");
    let output = "";

    for (let i = 0; i <inputNum.length ; i++) {
        let a = parseInt(digits[i]);
        output += a*a;
    }
    return parseInt(output);
}