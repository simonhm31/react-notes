
const person2 = {
    name: "Joe",
    walk() {
        console.log(this);
    }
};

person2.walk();

const walk = person2.walk;
console.log(walk);
walk();