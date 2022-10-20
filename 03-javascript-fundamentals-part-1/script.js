let multiply = (num1, num2) => {return num1 * num2};

let firstLetterCapitalized = (string) => {return string.charAt(0).toUpperCase() + string.slice(1);};

let lastLetter = (string) => {return string.slice(-1)};

function FizzBuzz(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i +" = FizzBuzz");
        } else if ((i % 5) === 0){
            console.log(i +" = Buzz");
        } else if ((i % 3) === 0){
            console.log(i +" = Fizz");
        } else {
            console.log(i);
        }
    }

}

FizzBuzz(parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")))

