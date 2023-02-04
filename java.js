function getComputerChoice(){ //for RNG
let x = Math.floor(Math.random()*3) + 1;
    if (x == 1){
        return 'rock';
    }else if (x == 2){
        return 'paper';
    }else{
        return 'scissors';
    }
}
    let playerScore = 0;
    let compScore = 0;
function versus(comp, playa){ //hand comparison function  
    if (comp == 'rock' && playa == 'paper'){
        playerScore += parseInt(1);
        console.log("player score :" + playerScore);
        return 'computer picked rock, you get a point!';   
    }else if (comp == 'rock' && playa == 'scissors'){
        compScore += parseInt(1);
        console.log("compscore: " + compScore);
        return 'computer picked rock, computer gets a point!';
    }else if (comp == 'paper' && playa == 'scissors'){
        playerScore += parseInt(1);
        console.log("player score: " + playerScore);
        return 'computer picked paper, you get a point!';
    }else if (comp == 'paper' && playa == 'rock'){
        compScore += parseInt(1);
        console.log("compscore: " + compScore);
        return 'computer picked paper, computer gets a point!!';   
    }else if (comp == 'scissors' && playa == 'rock'){
        playerScore += parseInt(1);
        console.log("player score: " + playerScore);
        return 'computer picked scissors, you get a point!';
    }else if (comp == 'scissors' && playa == 'paper'){
        compScore += parseInt(1);
        console.log(compScore);
        return 'computer picked scissors, computer gets a point!!';
    }else if (comp == playa){
        return 'DRAW!';
    }else{
        return 'HUH!?'
    }
}  
function game(){
for (i = 0; i < 5; i++){
    let a = prompt("rock, paper, scissors");
    alert(versus(getComputerChoice(), a.toLowerCase())); //call versus func (five rounds) and display result
}
}
function whoWon(){
    if (compScore > playerScore){
        alert("YOU LOSE! Computer won the game!!!!!");
        console.log('computer won the game');
    }else if (compScore < playerScore){
        alert("YOU WIN! You won the game!!!!!")
        console.log('you won the game');
    }else{
        alert("DRAW!!!!!");
    }
}
game();
whoWon();