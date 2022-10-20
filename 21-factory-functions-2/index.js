// self made factory function for self testing purposes

const Person = (personName, personAge) => {
    let _sayCount = 0;

    const getPersonName = () => personName;
    const getPersonAge = () => personAge;

    const sayCatchPhrase = () => {
        console.log(getPersonName() + ' ' + getPersonAge() + ' is my name and age');
        // _increaseSayCount();
    }
    const _increaseSayCount = () => {
        // console.log(`new count ${++_sayCount}`);
    }

    return {
        getPersonName,
        getPersonAge,
        sayCatchPhrase,
    }
}

const jimmie = Person('Jimmie', 22);

jimmie.sayCatchPhrase();

const Male = (name, age, mentalMaturity) => {
    const { getPersonName, getPersonAge, sayCatchPhrase } = Person(name, age);

    const doEverything = () => {
        console.log(`Age: ${getPersonAge()} \nMaturity: ${mentalMaturity} \nName: ${getPersonName()}`)
        sayCatchPhrase();
    }

    return {
        doEverything,
    }
}

james = Male('james', 25, '25 mentality');

james.doEverything();

// factory returns an object with methods and properties
