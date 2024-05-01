// ALWAYS USE EITHER LET OR CONST. NOT VAR

//The technical definition is that variables declared with "var" are
// scoped to the nearest function, whereas variables declared with "let"
//or "const" are scoped to the nearest block

// When you declare a variable with the "var" keyword, that 
// variable is accessible inside of the function in which it
// is defined

function sayHello(){
    for (var i = 0; i < 5; i++){
        console.log(i); // returns 1, 2, 3, 4
    };

    console.log(i); //returns 5. However i SHOULDN'T be accessible here
};

sayHello();


function sayHello2(){
    for (let i = 0; i < 5; i++){
        console.log(i); // returns 1, 2, 3, 4
    };

    console.log(i); //returns "i is not defined"
};

sayHello2();