const people = ["Thomas", "Phil", "John", "Lola", "Lorenz", "Sam", "Matt", "Martha", "Mathias"];
const paraRefused = document.querySelector(".refused");
const paraAdmitted = document.querySelector(".admitted");


function peopleBouncer() {
    for (const person of people) {
        if (person === "Phil" || person === "Lola") {
            paraRefused.textContent += ` ${person},`;
        }
        else {
            paraAdmitted.textContent += ` ${person},`; 
        }
    }

    paraRefused.textContent = paraRefused.textContent.substring(0, paraRefused.textContent.length - 1) + ".";
    paraAdmitted.textContent = paraAdmitted.textContent.substring(0, paraAdmitted.textContent.length - 1) + ".";
}

peopleBouncer();