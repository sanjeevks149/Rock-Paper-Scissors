let computerchoice ="";
let humanchoice;
let humanScore  = 0;
let computerScore = 0;
function getComputerChoice(){
    randonchoice = Math.round(Math.random() *100)
    console.log(randonchoice)
    if(randonchoice<=33)
        computerchoice = "Rock";
    else if(randonchoice<=66)
        computerchoice = "Paper";
    else
        computerchoice = "Scissor";
    return(computerchoice.toUpperCase());
}
function getHumanChoice(){
    let humanchoice;
    let YourChoice= prompt("1.Rock \n2.Paper \n3.Scissor\nEnter your choice");
    if(YourChoice == 1)
        humanchoice = "Rock";
    else if(YourChoice ==2)
        humanchoice = "Paper";
    else
        humanchoice = "Scissor";
    return humanchoice.toUpperCase();
}
function playRound(humanchoice,computerchoice){
    if(humanchoice==computerchoice){
        humanScore++;
        console.log("You Win! ",humanchoice," beats ",computerchoice);
    }
    else{
        console.log("You Lose! ",computerchoice," beats ",humanchoice);
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
getComputerChoice();
getHumanChoice();