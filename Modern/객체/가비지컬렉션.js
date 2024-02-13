let user = {
    name : 'john'
};

let admin = user;

user = null;

function marry(man,woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father : man,
        mother : woman
    }
}

let family = marry({
    name: 'jin'
    }, {
    name : 'kyu'
});

console.log(family.father);
console.log(family.father.wife);

delete family.father;
delete family.mother.husband;