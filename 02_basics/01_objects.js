// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Ankush",
    "full name" : " Ankush gangwar",
   [mySym] : "key1",
    age : 20,
    loaction : "Rampur",
    email : "ankush@google.com",
    isLoggedIn : false,
     lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
//console.log(JsUser[mySym]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
