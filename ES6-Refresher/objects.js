



// Declaring person object
const person = {
    a: "Joe",

    // walk is a method in the person object
    walk: function(){
        return "walk this way";
    },

    //talk is a method in the person object with better syntax
    talk(){
        return "talk this way";
    }

};


// Accessing properties and methods of person
console.log(person.a); //Returns "Joe";
console.log(person.walk()); // Returns "walk this way"
console.log(person.talk()); //Returns "talk this way"
console.log()

