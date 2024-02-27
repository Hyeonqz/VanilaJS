function disemvowel(str) {
    let ch = str.split('');
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];

    let result='';

    ch.forEach(c=> {
        if(!vowels.includes(c)) {
            result += c;
        }
    });

    return result;
}

console.log(disemvowel("This website is for losers LOL!"))