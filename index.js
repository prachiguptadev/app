console.log("yo");


const random = Math.floor(Math.random() * 6) + 1;
console.log(random);
let baseurl = "https://cdn.jsdelivr.net/gh/fullstackdevsml/diceimage@main/";
let fileName = `dice${random}.png`;

let image = `<img src="${baseurl + fileName}" alt="dice" />`;

document.getElementById("dice").innerHTML = image;