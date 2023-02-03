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
function versus(comp, playa){ //hand comparison function
    if (comp == 'rock' && playa == 'paper'){
        return 'computer picked rock, YOU WIN!';
    }else if (comp == 'rock' && playa == 'scissors'){
        return 'computer picked rock, YOU LOSE';
    }else if (comp == 'paper' && playa == 'scissors'){
        return 'computer picked paper, YOU WIN!';
    }else if (comp == 'paper' && playa == 'rock'){
        return 'computer picked paper, YOU LOSE!';
    }else if (comp == 'scissors' && playa == 'rock'){
        return 'computer picked scissors, YOU WIN!';
    }else if (comp == 'scissors' && playa == 'paper'){
        return 'computer picked scissors, YOU LOSE!';
    }else if (comp == playa){
        return 'DRAW!';
    }else{
        return 'HUH!?'
    }
}  

let a = prompt("rock, paper, scissors");
alert(versus(getComputerChoice(), a.toLowerCase())); //call versus func and display result