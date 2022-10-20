//writing this blind without outside help / google


//without inheritance
function Animal(name, isSleepy) {
    this.name = name;
    this.isSleepy = isSleepy;
}

Animal.prototype.sleep = function () {
    this.isSleepy = false;
}

const cat = new Animal('Lissa', true) //use new if you want to pull over everything from the constructor

// console.log(cat.isSleepy)
// cat.sleep()
// console.log(cat.isSleepy)

function Dog(name, isSleepy, heritage) {
    Animal.call(this, name, isSleepy);
    this.heritage = heritage;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.removeHeritage = function () {
    this.heritage = 'nothing here bozo';
}

const dog = new Dog('Doge', true, 'Best Heritage')

// console.log(dog.isSleepy)
// dog.sleep()
// console.log(dog.isSleepy)

// console.log(dog.heritage)
// dog.removeHeritage()
// console.log(dog.heritage)

/////////////////////////////////////////////with classes

class Animalz {
    constructor(name, isSleepy) {
        this.name = name;
        this.isSleepy = isSleepy;
    }

    sleep() {
        this.isSleepy = false;
    }
}

const catz = new Animalz('Lissaz', true)

// console.log(catz.isSleepy)
// catz.sleep()
// console.log(catz.isSleepy)

class Dogz extends Animalz {
    constructor(name, isSleepy, heritage) {
        super(name, isSleepy);
        this.heritage = heritage;
    }

    bark() {
        return `Woof, woof! I am a dog named ${this.name} with the heritage of ${this.heritage}`
    }

    removeHeritage() {
        this.heritage = 'nothing';
    }
}

const dogz = new Dogz('Dogez', true, 'Bestest heritage');

console.log(dogz.isSleepy)
dogz.sleep()
console.log(dogz.isSleepy)

console.log(dogz.bark())
dogz.removeHeritage();
console.log(dogz.bark())

