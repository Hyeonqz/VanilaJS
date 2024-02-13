function spinWords(string) {
    let words  = string.split(' ');

    for (let i = 0; i < words.length; i++) {
        if(words[i].length >= 5) {
            words[i] = reverseString(words[i]);
        }
    }

    return words.join(' ');
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

