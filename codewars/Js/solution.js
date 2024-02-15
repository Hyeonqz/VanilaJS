function solution(string) {

    if (string==null) {
        return string;
    }

    let toArr = string.split('');
    for (let i = 0; i < toArr.length; i++) {
        if(toArr[i] === toArr[i].toUpperCase()) {
            toArr.splice(i,1," "+toArr[i]);
        }
    }
    return toArr.join('');
}