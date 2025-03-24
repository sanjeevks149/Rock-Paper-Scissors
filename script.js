function getComputerChoice(){
    let computerchoice;
    let randonchoice = Math.round(Math.random() *100)
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



function Playgame(){
    let humanScore  = 0;
    let computerScore = 0;
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
    let round = 0;
    while(round < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        round++;
    }
    if(humanScore>computerScore)
        console.log("You WIN")
    else
        console.log("You lose")
    
}
Playgame();
