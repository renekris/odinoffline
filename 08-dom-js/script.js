const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red;";
container.appendChild(para);

const headerThree = document.createElement("h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";
container.appendChild(headerThree);

const pinkContainer = document.createElement("div");
pinkContainer.setAttribute("style", "border: 1px solid black; background-color: pink;");
pinkContainer.classList.add("pinkContainer");


const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div";
pinkContainer.appendChild(headerOne);

const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";
pinkContainer.appendChild(paraTwo);


container.appendChild(pinkContainer); //appending it to container after creating the elements inside it.
