let user = {
    name : 'john',
    age : 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}`;
    }
};
console.log(user);
console.log("--------------------------------")

// JSON.stringify
let student = {
    name : 'john',
    age : 30,
    isAdmin : false,
    courses : ['html', 'css', 'js'],
    wife : null
};

let json = JSON.stringify(student);
console.log( typeof json);
console.log(json);
console.log("--------------------------------")

console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1,2,3]));
console.log()

let meetup = {
    title: "conference",
    room: {
        number: 23,
        participants: ['john', 'jane']
    }
};

console.log(JSON.stringify(meetup));