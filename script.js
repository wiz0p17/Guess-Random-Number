let randomNum = parseInt((Math.random()*100)+1)
console.log(randomNum);


const input = document.querySelector('.txt');
const submit = document.querySelector('#subt')

const previousAttempt = document.querySelector('.previous-attempt')
const remainingAttempt = document.querySelector('.remaning-attempt')
const startOver = document.querySelector('.container2')

const lowOrHigh = document.querySelector('.high-or-low')

const p = document.createElement('p')

let prevAttemptArr = [];

let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',(e) => {
            e.preventDefault()
            const guess = parseInt(input.value) 
            console.log(guess);
            
            validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number")
    }else if (guess < 1){
        alert("Please Enter a Number Greater than 1")
    }else if (guess > 100){
        alert("Please Enter a Number smaller than 100")
    }else{
        prevAttemptArr.push(guess)

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNum}`)
            gameOver()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You Guessed it Right, You Won`)
        gameOver()
    }else if(guess < randomNum){
        displayMessage(`Guess is too Low`)
    }else if(guess > randomNum){
        displayMessage(`Guess is too High`)
    }
}

function displayGuess(guess){
    input.value = ''
    previousAttempt.innerHTML += `${guess} `
    numGuess++;
    remainingAttempt.innerHTML = `${11-numGuess}`
}

function gameOver(){
    input.value = ''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
    startOver.appendChild(p);
    playGame = false
    newGame();    
}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    console.log(newGameButton);
    
    newGameButton.addEventListener('click',() => {
        randomNum=parseInt((Math.random()*100)+1)
        prevAttemptArr = []
        numGuess = 1
        previousAttempt.innerHTML = ''
        remainingAttempt.innerHTML = `${11-numGuess}`
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}  


function displayMessage(message){
    lowOrHigh.innerHTML = `<p>${message}</p>`
}