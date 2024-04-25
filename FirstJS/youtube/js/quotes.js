const quotes = [
    {
        quote : "My life is Good :",
        author : "jin"
    },
    {
        quote : "People is the first :",
        author : "previous president"
    },
    {
        quote : "i am fight the future better than today :",
        author : "제이스"
    },
    {
        quote : "The early wake up birds eat the most bug : ",
        author : "스웨인"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
console.log(todaysQuote);
// 반올림 round, 올림 ceil, 버림 floor

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// # 6.1 부터 보기 https://nomadcoders.co/javascript-for-beginners/lectures/2912