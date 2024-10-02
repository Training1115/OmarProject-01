const body = document.body;


// create & get elements 
const home = document.getElementById('home');
const over = document.getElementById('gameOver');
const score = document.getElementById('scores');
const comingSoon = document.getElementById('comesoon');
const game = document.getElementById('game');
const keys = document.createElement('div');
const dashdiv = document.createElement('div');
const par = document.createElement('p');
const remainingAttemptsDisplay = document.createElement('span');
const sections = document.querySelectorAll('.slides');
const message = document.createElement('p');
const end = document.createElement('button');
const next = document.createElement('button');
const restart = document.createElement('button');


let scoredPoints = 0;
let highScore = localStorage.getItem('high_score') || 0;



dashdiv.id="wordDisplay";
dashdiv.innerText='_';
game.appendChild(dashdiv);
par.innerText='Remaining Attempts:';
game.appendChild(par);
remainingAttemptsDisplay.id="remainingAttempts";
par.appendChild(remainingAttemptsDisplay);
keys.id="letterButtons";
game.appendChild(keys);

function showSection(sectionId) {
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.remove('hidden');
        section.classList.add('flex-container');
      } else {
        section.classList.add('hidden');
        section.classList.remove('flex-container');
      }
    });
  }
  
  
  

message.id='message';
game.appendChild(message);
end.id="endButton";
end.innerText = 'End Game';
end.style="display: none;";
game.appendChild(end);
restart.id="restartButton";
restart.innerText = 'Restart Game';
restart.style="display: none;";
over.appendChild(restart);
next.id="nextButton";
next.innerText = 'Next Word';
next.style="display: none;";
game.appendChild(next);
let guessedLetters = new Set();
const words = ['car' , 'fish' , 'dog' , 'table' , 'apple','phone'];
let randomWord =words[ Math.floor(Math.random() * words.length)];
const goToHome = document.createElement("button");
goToHome.id = 'backHome';
goToHome.textContent = "Back To Home";
over.appendChild(goToHome);
const goToScore5 = document.createElement("button");
goToScore5.id = 'score_review';
goToScore5.textContent = "Go To Score";
over.appendChild(goToScore5);
goToScore5.addEventListener("click", () => {
    showSection('scores');
    window.location.href = '#scores';
});
const goToHome1 = document.createElement("button");
goToHome1.id = 'backHome1';
goToHome1.textContent = "Back To Home";
game.appendChild(goToHome1);
const goToHome2 = document.createElement("button");
goToHome2.id = 'backHome2';
goToHome2.textContent = "Back To Home";
comingSoon.appendChild(goToHome2);

goToHome.addEventListener("click", () => {
    showSection('home');

});
const goToHome3 = document.createElement("button");
goToHome3.id = 'backHome2';
goToHome3.textContent = "Back To Home";
score.appendChild(goToHome3);

goToHome3.addEventListener("click", () => {
    showSection('home');
    window.location.href = '#home';
    
});

goToHome1.addEventListener("click", () => {
    showSection('home');
    window.location.href = '#home';
    
});
goToHome2.addEventListener("click", () => {
    showSection('home');
    window.location.href = '#home';
    
});

const header1 = document.createElement('header');
const div = document.createElement('div');
const footer2 = document.createElement('footer');
footer2.style = "display:flex ; justify-content:space-around;"
footer2.id='gamefooter';
game.appendChild(footer2);
const divsc = document.createElement('div');


footer2.appendChild(goToHome1);

divsc.innerHTML=`your score is : ${scoredPoints}`;
footer2.appendChild(divsc);
home.appendChild(header1);

const div1 = home.appendChild(div);
div1.id = 'hom';

const div2 = document.createElement('div');
div1.appendChild(div2);
div2.id = 'name';
const input = document.createElement('input');
input.placeholder = "enter your name";
input.id = 'nameBox';
div2.appendChild(input);
const button = document.createElement("button");
button.innerText = "submit";
div2.appendChild(button)

const div3 = document.createElement('div')
div1.appendChild(div3);
div3.id = 'lvl';


const footer1 = document.createElement('footer');
home.appendChild(footer1);
footer1.id = 'foot';



const div5 = document.createElement('div')
footer1.appendChild(div5);
div5.id = 'store';
const btn5 = document.createElement('button');
btn5.innerText = 'Store';


btn5.addEventListener("click", () => {
    showSection('comesoon');
    window.location.href = '#comesoon';

});
div5.appendChild(btn5);

const div6 = document.createElement('div')
footer1.appendChild(div6);
div6.id = 'start';
const btn = document.createElement('button');
btn.innerText = `Start`;
btn.addEventListener("click", () => {
    
    
     showSection('game');
     window.location.href = '#game';
     initializeGame();

});
div6.appendChild(btn);


const div7 = document.createElement('div')
footer1.appendChild(div7);
div7.id = 'coin';

const btn4 = document.createElement('button');
btn4.innerText = 'Coins';


btn4.addEventListener("click", () => {
    showSection('comesoon');
    window.location.href = '#comesoon';
    
    
});
div7.appendChild(btn4);
const div9 = document.createElement('div');
div9.id = 'score4';
footer1.appendChild(div9);
const score4 = document.createElement("button");
score4.textContent = "score";
div9.appendChild(score4);

score4.addEventListener("click", () => {
    showSection('scores');
    window.location.href = '#scores';

});


function checkHighScore() {
    if (scoredPoints > highScore) {
        highScore = scoredPoints;
        localStorage.setItem('high_score', highScore); 
    }
    updateScorePage(); 
}


let names = '';
let btn1 = '';
button.addEventListener("click", () => {
    names = input.value;
    header1.innerText = `Hello ${names}`;
    input.value = '';
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        names = input.value;
        header1.innerText = `Hello ${names}`;
        input.value = '';
    }
});








console.log('randomword :>> ', randomWord);
let wordToGuess = randomWord; 
const maxAttempts = 5;
let remainingAttempts = maxAttempts;


function initializeGame() {
    guessedLetters.clear();
    remainingAttempts = maxAttempts;
    updateWordDisplay();
    remainingAttemptsDisplay.textContent = remainingAttempts;
    message.textContent = '';
    
    
    keys.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const buttonn = document.createElement('button');
        buttonn.id='buttonn'
        buttonn.textContent = letter;
        buttonn.id = `letter-${letter}`;
        buttonn.addEventListener('click', () => handleGuess(letter));
        keys.appendChild(buttonn);
    }

    end.style.display = 'none';
}


function updateWordDisplay() {
    const displayText = wordToGuess
        .split('')
        .map(letter => {
            if (guessedLetters.has(letter)) {
              return letter;
            } else {
              return '_';
            }
          })
        .join(' ');
    wordDisplay.textContent = displayText;
}


function handleGuess(letter) {
    const button = document.getElementById(`letter-${letter}`);
    button.disabled = true;

    if (wordToGuess.includes(letter.toLowerCase())) {
        guessedLetters.add(letter.toLowerCase());
        message.textContent = 'Correct!';
        message.style.color = 'green';
        scoredPoints+=5
        divsc.innerHTML=`your score is : ${scoredPoints}`;
    } else {
        remainingAttempts--;
        message.textContent = 'Wrong!';
        message.style.color = 'red';
    }

    updateWordDisplay();
    remainingAttemptsDisplay.textContent = remainingAttempts;

    
    if (isGameWon()) {
        message.textContent = `Congratulations! You guessed the word: ${wordToGuess}`;
        nextWord();
    } else if (remainingAttempts === 0) {
        message.textContent = `Game over! The word was: ${wordToGuess}`;
        
        
        endGame();
    }
}


function isGameWon() {
    return wordToGuess.split('').every(letter => guessedLetters.has(letter));
}


function endGame() {
    const buttons = document.querySelectorAll('#letterButtons button');
    buttons.forEach(button => button.disabled = true);
    end.style.display = 'flex';
    
    
    checkHighScore();
    
    
    updateFooterScore();
}
function nextWord() {
    const buttons = document.querySelectorAll('#letterButtons button');
    buttons.forEach(button => button.disabled = true);
    next.style.display = 'flex';
    
    
    
}


end.addEventListener('click',() => { 
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordToGuess = randomWord;
    restart.style="display: flex;"; 
    showSection('gameOver');
    window.location.href = '#gameOver';
    checkHighScore(scoredPoints);
});
next.addEventListener('click',() => { 
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordToGuess = randomWord; 
    next.style.display = 'none';
    checkHighScore(); 
    initializeGame();
});

    restart.addEventListener('click',() => { 
        randomWord = words[Math.floor(Math.random() * words.length)];
        wordToGuess = randomWord; 
        restart.style.display = 'none';
        showSection('game');
        window.location.href = '#game';
        scoredPoints = 0;  
        updateFooterScore(); 
        initializeGame();
    });
updateFooterScore();
initializeGame();




 


function updateFooterScore() {
    const divsc = document.getElementById('gamefooter').querySelector('div');
    divsc.innerHTML = `Your score is: ${scoredPoints}`;
}


function updateScorePage() {
    const yourScore = document.getElementById('your-score');
    const bestRecord = document.getElementById('best-record');

    if (yourScore) {
        yourScore.innerText = `Your score is: ${scoredPoints}`;
    }

    if (bestRecord) {
        bestRecord.innerText = `High score is: ${localStorage.getItem('high_score') || 0}`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let yourScore = document.createElement('div');
    yourScore.id = 'your-score';
    score.appendChild(yourScore);
    
    let bestRecord = document.createElement('div');
    bestRecord.id = 'best-record';
    score.appendChild(bestRecord);

    updateScorePage(); 
}); 




    

