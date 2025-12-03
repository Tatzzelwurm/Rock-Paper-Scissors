
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
if (getComputerChoice() == 0) {
    console.log("Rock");

}
else if (getComputerChoice() == 1) {
    console.log("Paper");
    
}
else if (getComputerChoice() == 2) {
    console.log("Scissors");
    
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
}

console.log(getHumanChoice())