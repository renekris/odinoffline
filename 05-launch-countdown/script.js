const output = document.querySelector(".output");

async function countdownFromTen() {
    for (let i = 10; i >= 0; i--) {
        console.log("countdown: " + i);
        const para = document.createElement("p");
        output.appendChild(para);
        if (i === 0) {
            para.textContent = "Blast off!";
        } else if (i === 10) {
            para.textContent = "Coundown 10!";
        } else {
            para.textContent = i;
        }
        await new Promise(r => setTimeout(r, 1000));
    }
}

countdownFromTen();