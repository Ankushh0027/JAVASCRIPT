
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("S");
    console.log("H");
}
//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    //  let result = number1 + number2
    //  return result
    return number1 + number2
}
const result = addTwoNumbers(3, 9)

 //console.log("Result: ", result);

 function loginUserMessage(username = "Raj"){
    if(!username){
        console.log("Please Enter a username:");
        return
    }
    return `${username} just logged in`
 }

 console.log(loginUserMessage("Ankush"));
