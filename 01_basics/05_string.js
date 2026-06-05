const name = "Ankush"
const repoCount  = 20

//console.log(name + repoCount + ' VALUE');

//console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Ankush-g-hvc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//console.log(gameName.replace("g","uu"));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-6,8)
console.log(anotherString);

const newStringOne = '  Ankush  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://Ankush.com//Ankush%30gangwar'
console.log(url.replace('%30', '-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


