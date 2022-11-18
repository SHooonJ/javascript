function getComputerChoice(){
    let ranNum = Math.floor((Math.random()*10)%3);
    const answer = document.querySelector('.Computer.Result');
    const compImg = document.querySelector('.Picture .Computer');
    switch(ranNum){
        case 0: answer.textContent = "rock";
                compImg.src = "./images/rock.jpeg";
        return "rock";
        break;
        case 1: answer.textContent = "paper";
                compImg.src = "./images/paper.jpeg";
        return "paper";
        break;
        case 2: answer.textContent = "scissors";
                compImg.src = "./images/scissors.png";
        return "scissors";
        break;
        default: answer.textContent = "error";
        return "error";
    }
    return;
}

function playRound(playerSelection, computerSelection){
    const score = document.querySelector('.Score');
    if(playerSelection === computerSelection){
        score.textContent = "tie";
        return "tie";
    }
    if((playerSelection === "rock" && computerSelection === "scissors")
    ||(playerSelection === "scissors" && computerSelection === "paper")
    ||(playerSelection === "paper" && computerSelection === "rock")){
        score.textContent = "win";
        return "win";
    }
    score.textContent = "lose";
    return "lose";
}

function display(){
    const result = document.querySelector('.Player .Result');
    result.textContent = `${this.value}`;
    let points = playRound(this.value, getComputerChoice());
    if(points === "win"){score++;}
    return;
}
// let score = 0;

const playerChoice = Array.from(document.querySelectorAll('.Player .choice'));
playerChoice.forEach(element => element.addEventListener('click', display));

