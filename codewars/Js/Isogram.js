function isIsogram(str) {

    if (str === "") {
        return true;
    }

    str = str.toLowerCase();
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;

}

console.log(isIsogram("moose"))