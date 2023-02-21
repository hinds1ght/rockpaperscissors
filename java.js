const theGame = document.querySelector('#game')
let pScore = document.createElement('span')
let cScore = document.createElement('span')
let playerScore = document.createElement('div')
let compScore = document.createElement('div')
let result = document.createElement('div')
let win = document.createElement('h1')
let a = 0
let b = 0
theGame.append(pScore, cScore, playerScore, compScore, result)
const choices = ['rock', 'paper', 'scissors']

const clicked = (e) => {
  getResult(e.target.textContent, choices[Math.floor(Math.random() * choices.length)])
  playerScore.textContent ='player: ' + e.target.textContent
}

choices.forEach(item => {
        const button = document.createElement('button')
        button.textContent = item
        button.addEventListener('click', clicked)
        theGame.appendChild(button)
})

const getResult = (player, computer) => {
    switch (player + computer){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            pScore.textContent = `player score: ${a = final(a)} `
            compScore.textContent ='computer: ' + computer
            result.textContent = 'result: you win'       
        break   
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            cScore.textContent = `computer score: ${b = final(b)} `
            compScore.textContent ='computer: ' + computer
            result.textContent = 'result: you lost'      
        break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            compScore.textContent ='computer: ' + computer
            result.textContent = 'result: Draw'  
            break  
    }
    
} 

function final (point){
    if ( point === 4){
        return ('WIN')
    }else{
        return point += 1
    }
}
