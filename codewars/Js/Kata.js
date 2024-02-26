function multiply(number) {

    let abs = Math.abs(number);
    let digits = String(abs).length;
    let Five = Math.pow(5,digits);
    return number * Five;

}