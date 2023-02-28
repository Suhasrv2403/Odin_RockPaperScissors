
game();




function game(){

for(let i=0;i<5;i++){
const playerSelection = prompt("Enter your choice");
const computerSelection = getComputerChoice();
alert(playRound(playerSelection , computerSelection));
}

}





function getComputerChoice(){
const selector = ["rock","paper","scissor"];
var a = (Math.floor(Math.random()*10) %3);
return selector[a];
}



function playRound(playerSelection , computerSelection){

switch(playerSelection){
	case "rock":
		switch(computerSelection){
			case "rock":
				return ("Tie! Both choose rock");
				brea;
			case "paper":
				return ("You loose! Paper beats Rock");
				break;
			case "scissor":
				return ("You Win! Rock beats scissor");
				break;
			default:
				return("Invalid choice");
				break;
					}
			break;
	case "paper":
			switch(computerSelection){
			case "rock":
				return ("You Win! paper beats rock");
				brea;
			case "paper":
				return ("Tie! Both choose paper");
				break;
			case "scissor":
				return ("You loose! scissor beats paper");
				break;
			default:
				return("Invalid choice");
				break;
						}
				break;
				
	case "scissor" :
	
			switch(computerSelection){
			case "rock":
				return ("You loose! rock beats scissor");
				brea;
			case "paper":
				return ("You win! scissor beats paper");
				break;
			case "scissor":
				return ("Tie! Both choose scissor");
				break;
			default:
				return("Invalid choice");
				break;
						}
				break;
			
		default:
			return("Wrong choice");
			break;
			
					}
	}
						

