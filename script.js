let computerchoice ="";
let humanchoice;
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
function getHumanChoice(){
    console.log("1.Rock")
    console.log("2.Paper")
    console.log("3.Scissor")
    let YourChoice= prompt("1.Rock \n2.Paper \n3.Scissor\nEnter your choice");
    if(YourChoice == 1)
        humanchoice = "Rock";
    else if(YourChoice ==2)
        humanchoice = "Paper";
    else
        humanchoice = "Scissor";
    console.log(humanchoice)

}

getComputerChoice();
getHumanChoice();