// function Calc() {
//     // this.num = 0;
// }

// Calc.prototype.increment = function (number) {
//     this.num += number ?? 1;
//     return this.num;
// }

// function AddNumber(num) {
//     this.num = num
// }

// AddNumber.prototype = Object.create(Calc.prototype);

// let newObj = new Calc();
// newObj.num = 5;
// let sumUp = new AddNumber(0);
// let sumUp2;

// console.log(sumUp.increment(5)); // => 5
// console.log(newObj.increment()); // => 6


// MORE TESTING & SELF-TEACHING

// function familyMember(humanName, humanAge, humanHeight) {
//     this.humanName = humanName
//     this.humanAge = humanAge
//     this.humanHeight = humanHeight
// }

// familyMember.prototype.selfIntro = function () { return `My name is ${this.humanName}, age is ${this.humanAge}, and height is ${this.humanHeight}` }


// const matt = new familyMember('Matt', 22, 194);

// console.log(matt.selfIntro());


// function familyMember(humanName, humanAge, humanHeight) {
//     this.humanName = humanName;
//     this.humanAge = humanAge;
//     this.humanHeight = humanHeight;
// }

// familyHouse.prototype = Object.create(new familyMember());

// function familyHouse(houseName, houseAge) {
//     this.houseName = houseName;
//     this.houseAge = houseAge;
// }

// familyHouse.prototype.houseMember = function () {
//     return `Mr. ${this.humanName} lives in ${this.houseName}`;
// }

// familyMember.prototype.selfIntro = function () {
//     return `My name is ${this.humanName}, age is ${this.humanAge}, and height is ${this.humanHeight}`
// }
// familyHouse.prototype.giveBoth = function () {
//     return familyHouse.selfIntro() + '\n' + familyHouse.houseMember();
// }


// // const matt = new familyMember('Matt', 22, 194);
// const house = new familyHouse('House Heres', 55);

// const all = new familyHouse('House Heres', 55)

// // console.log(matt.selfIntro());
// // console.log(matt.houseMember()); prototype chaining now working due to ordering

// // console.log(house.selfIntro());
// // console.log(house.houseMember());

// console.log(all.giveBoth());
// console.log(all.houseMember());

//////////////////////////////////


// function Plant() {
//     this.country = "Mexico";
//     this.isOrganic = true;
// }

// // Add the showNameAndColor method to the Plant prototype property
// Plant.prototype.showNameAndColor = function () {
//     console.log("I am a " + this.name + " and my color is " + this.color);
// }

// // Add the amIOrganic method to the Plant prototype property
// Plant.prototype.amIOrganic = function () {
//     if (this.isOrganic)
//         console.log("I am organic, Baby!");
// }

// function Fruit(fruitName, fruitColor) {
//     this.name = fruitName;
//     this.color = fruitColor;
// }

// // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
// Fruit.prototype = new Plant();

// // Creates a new object, aBanana, with the Fruit constructor
// var aBanana = new Fruit("Banana", "Yellow");

// // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
// console.log(aBanana.name); // Banana

// // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
// console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.





//MORE TESTING | IGNORE ABOVE


////working method invocation inheritance

// const play = {
//     games() {
//         return 'We are playing games'
//     },
//     dance() {
//         return 'We are dancing'
//     },
//     sing() {
//         return 'We are playing games'
//     },
// }

// function Action() {
//     let action = Object.create(play);
//     console.log(action.games());
//     console.log(action.dance());
//     console.log(action.sing());
// }

// Action();


//////////////////////// FINALLY WORKING AND UNDERSTANDING
// const playMethods = {
//     games(isSleepy) {
//         console.log('We are playing games' + ' ' + this.childName + ' ' + this.childAge);
//         isSleepy = !isSleepy;
//         return isSleepy;
//     },
//     dance() {
//         return 'We are dancing' + ' ' + this.childName + ' ' + this.childAge;
//     },
//     sing() {
//         return 'We are singing' + ' ' + this.childName + ' ' + this.childAge;
//     },
// }

// function Action(childName, childAge) {
//     let action = Object.create(playMethods);
//     action.childName = childName;
//     action.childAge = childAge;

//     // console.log('Doing activities POG');

//     return action;
// }

// let matt = Action('Matt', 22);
// let jess = Action('Jess', 12);
// let boze = Action('Boze', 25);



// console.log(matt.games(false));
// console.log(jess.dance());
// console.log(boze.sing());


////////////////////////// same as above but using prototype


// Action.prototype.games = function (isSleepy) {
//     console.log('We are playing games' + ' ' + this.childName + ' ' + this.childAge);
//     isSleepy = !isSleepy;
//     return isSleepy;
// }

// Action.prototype.dance = function () {
//     return 'We are dancing' + ' ' + this.childName + ' ' + this.childAge;
// }

// Action.prototype.sing = function () {
//     return 'We are singing' + ' ' + this.childName + ' ' + this.childAge;
// }

// function Action(childName, childAge) {
//     // let this = Object.create(Action.prototype); //new removes the need to create an object, placed by 'this'
//     this.childName = childName;
//     this.childAge = childAge;

//     // return this; //new also removes the need to return the object
// }



// let matt = new Action('Matt', 22);
// let jess = new Action('Jess', 12);
// let boze = new Action('Boze', 25);



// console.log(matt.games(false));
// console.log(jess.dance());
// console.log(boze.sing());


//////////////////////// same as above but with a class instead

// class Act {
//     constructor(childName, childAge) {
//         this.childName = childName;
//         this.childAge = childAge;
//     }

//     games(isSleepy) {
//         console.log('We are playing games' + ' ' + this.childName + ' ' + this.childAge);
//         isSleepy = !isSleepy;
//         return isSleepy;
//     }

//     dance() {
//         return 'We are dancing' + ' ' + this.childName + ' ' + this.childAge;
//     }

//     sing() {
//         return 'We are singing' + ' ' + this.childName + ' ' + this.childAge;
//     }
// }

// let mathias = new Act('Mathias', 20)
// let jones = new Act('Jones', 22)
// let bones = new Act('Bones', 21)

// console.log(mathias.games(true))
// console.log(jones.dance())
// console.log(bones.sing())

////////////////////////// same as above above but with inheritance


// function Action(name, age) {
//     // let this = Object.create(Action.prototype); //new removes the need to create an object, placed by 'this'
//     this.name = name;
//     this.age = age;

//     // return this; //new also removes the need to return the object
// }

// Action.prototype.games = function (isSleepy) {
//     console.log('We are playing games' + ' ' + this.name + ' ' + this.age);
//     isSleepy = !isSleepy;
//     return isSleepy;
// }

// Action.prototype.dance = function () {
//     return 'We are dancing' + ' ' + this.name + ' ' + this.age;
// }

// Action.prototype.sing = function () {
//     return 'We are singing' + ' ' + this.name + ' ' + this.age;
// }


// function Adult(name, age, strength) {
//     Action.call(this, name, age); //only gives properties, not methods
//     this.strength = strength;
// }

// Adult.prototype = Object.create(Action.prototype); //this gives methods as well
// //prototype always ends up as an object
// //make new prototypes here

// Adult.prototype.scream = function () {
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh")
//     this.name = 'dead';
//     this.age = 10000;
//     this.strength = 'status: dead, okay?'
// }

// ////after adding last prototype, reset its constructor so instanceof shows Adult instead of Action
// Adult.prototype.constructor = Adult;




// // let matt = new Action('Matt', 13);
// // let jess = new Action('Jess', 12);
// // let boze = new Action('Boze', 14);

// const james = new Adult('James', 22, 'very strong');


// // console.log(matt.games(false));
// // console.log(jess.dance());
// // console.log(boze.sing());

// console.log(james);
// console.log(james.sing());
// console.log(james.strength);

// console.log('\n\n\n\n')
// console.log(james.name)
// james.scream()
// console.log(james.name)


///////////////////////////////////////////////same as above but with ES6 class and inheritance

// class Act {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     games(isSleepy) {
//         console.log('We are playing games' + ' ' + this.name + ' ' + this.age);
//         isSleepy = !isSleepy;
//         return isSleepy;
//     }

//     dance() {
//         return 'We are dancing' + ' ' + this.name + ' ' + this.age;
//     }

//     sing() {
//         return 'We are singing' + ' ' + this.name + ' ' + this.age;
//     }
// }

// class Adult extends Act {
//     constructor(name, age, strength) {
//         super(name, age); //similar to Act.call(this, name, age);
//         this.strength = strength;
//     }

//     scream() {
//         console.log("AAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh")
//         this.name = 'dead';
//         this.age = 10000;
//         this.strength = 'status: dead, okay?'
//     }
// }

// let mathias = new Act('Mathias', 20)
// let jones = new Act('Jones', 22)
// let bones = new Act('Bones', 21)

// const james = new Adult('James', 22, 'very strong');

// console.log(mathias.games(true))
// console.log(jones.dance())
// console.log(bones.sing())

// console.log(james);
// console.log(james.sing());
// console.log(james.strength);

// console.log('\n\n\n\n')
// console.log(james.name)
// james.scream()
// console.log(james.name)


// object function shorthand is| sayHi() { alert('Hello') } <- sayHi: function() { alert('Hello') } |
// below this is the difference between new and object.create

function Car(color) {
    this.color = color;
}

const car1 = new Car('red');
const car2 = Object.create(Car.prototype); ///creates a "reference"

console.dir(car1);
console.dir(car2);

/// car 1 has the proto object and the red color property
/// car 2 has only the proto object
