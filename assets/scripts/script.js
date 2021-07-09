document.getElementById("1").addEventListener("click", clickBoard);
document.getElementById("2").addEventListener("click", clickBoard);
document.getElementById("3").addEventListener("click", clickBoard);
document.getElementById("4").addEventListener("click", clickBoard);
document.getElementById("5").addEventListener("click", clickBoard);
document.getElementById("6").addEventListener("click", clickBoard);
document.getElementById("7").addEventListener("click", clickBoard);
document.getElementById("8").addEventListener("click", clickBoard);
document.getElementById("9").addEventListener("click", clickBoard);

const paragraph = document.createElement("p");
const text = document.createTextNode("X")

function clickBoard(event) {
    event.target.appendChild(text);
    event.target.style.fontSize = "50px";
}
