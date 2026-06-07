// Immediately Invoked Function Expressions (IIFE)


(function apple(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//semi colon is must.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ankush')