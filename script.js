let computerchoice =0;
function getComputerChoice(){
    randonchoice = Math.round(Math.random() *100)
    console.log(randonchoice)
    if(randonchoice<=33)
        computerchoice = "Rock";
    else if(randonchoice<=66)
        computerchoice = "Paper";
    else
        computerchoice = "Scissor";
    console.log(computerchoice)
}

getComputerChoice();