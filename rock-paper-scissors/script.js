function getComputerChoice(){
    let ranNum = Math.floor((Math.random()*10)%3);
    switch(ranNum){
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
        default: return "error";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "tie";
    }
    if((playerSelection === "rock" && computerSelection === "scissors")
        ||(playerSelection === "scissors" && computerSelection === "paper")
        ||(playerSelection === "paper" && computerSelection === "rock")){
        return "win";
    }
    return "lose";
}

function game(num){
    let counter = 0;
    for(let i = 0; i < num; i++){
        let playerSelection = prompt("Enter chioce: ");
        let computerChoice = getComputerChoice();
        let result = playRound(playerSelection, computerChoice);
        console.log(`Computer Choice: ${computerChoice}`);
        console.log(`You played ${playerSelection}`)
        console.log(`Result: ${result}`);
        if(result === "win"){
            counter++;
        }
    }
    console.log(`You won: ${counter}`);
}

function displayPlayer(){
    const result = document.querySelector('.Player .Result');
    result.textContent = `${this.value}`;
    return;
}

const playerChoice = Array.from(document.querySelectorAll('.Player .choice'));
playerChoice.forEach(element => element.addEventListener('click', displayPlayer));


