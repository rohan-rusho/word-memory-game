const startButton = document.querySelector('#startButton');
const inputBox = document.querySelector('#inputBox');
const body = document.querySelector('body');
inputBox.disabled = true;

// Start Game
startButton.addEventListener('click', (e) => {
    levelOne();
    startButton.innerHTML = 'RESTART';
    startButton.classList.add('reload');
    inputBox.placeholder = '';
    reload();
});

// Restart game
const reload = () => {
    let reloadButton = document.querySelector('.reload');
    reloadButton.addEventListener('click', (e) => {
        confirm('Do you want to restart the game?');
        location.reload();
    });
};


// Pool of Words
const wordsLevelOne = ['set', 'tree', 'damn', 'fleet', 'rebel', 'sock', 'guide', 'video', 'ask', 'exit', 'die', 'lemon', 'charm', 'wall', 'final', 'fork', 'main', 'bite', 'gain', 'range', 'marsh', 'user', 'craft', 'coin', 'air', 'money', 'hay', 'young', 'anger', 'vague', 'palm', 'flu', 'black', 'new', 'hover', 'item', 'widen', 'arch', 'star', 'delay', 'dry', 'north', 'mark', 'soil', 'trait', 'monk', 'moon', 'do', 'bus', 'motif'];
const wordsLevelTwo = ['degree', 'screen', 'favourite', 'episode', 'reckless', 'abridge', 'census', 'gradual', 'sleeve', 'shatter', 'estate', 'consolidate', 'peasant', 'profile', 'summary', 'profound', 'preparation', 'forest', 'serious', 'satellite', 'railcar', 'earthquake', 'secure', 'offense', 'spider', 'parking', 'filter', 'expression', 'ambition', 'background', 'distant', 'charge', 'reader', 'cemetery', 'origin', 'writer', 'cucumber', 'obligation', 'language', 'prosecute', 'teacher', 'fisherman', 'climate', 'creation', 'redundancy', 'plaster', 'linear', 'document', 'escape', 'student'];
const wordsLevelThree = ['policeman', 'flight', 'justify', 'vision', 'build', 'tent', 'engagement', 'deliver', 'wedding', 'comfort', 'critical', 'spill', 'insight', 'disagree', 'priority', 'radio', 'fox', 'presidency', 'throne', 'thesis', 'resign', 'displace', 'widen', 'material', 'celebration', 'reach', 'abuse', 'point', 'contract', 'environmental', 'revive', 'houseplant', 'ring', 'sow', 'vegetation', 'criticism', 'proclaim', 'formal', 'state', 'ghost', 'humor', 'overeat', 'trade', 'stomach', 'rebellion', 'transfer', 'belly', 'hypothesis', 'dozen', 'class'];
const print = document.querySelector('#results');

let lives = 3;
let sumPoints = 0;
let noPoints = 0;
let correctWords = []; // Array to store correct words
let wrongWords = [];   // Array to store wrong words

// Levels
// const levelOne = () => {
//     inputBox.disabled = true;
//     const random = Math.floor(Math.random() * wordsLevelOne.length);
//     displayWord = wordsLevelOne[random];
//     const wordBox = document.querySelector('#wordBox');
//     wordBox.innerHTML = displayWord;

//     setTimeout(() => {
//         wordBox.innerHTML = '';
//         enableInput();
//     }, 1500);
// }

// const levelTwo = () => {
//     inputBox.disabled = true;
//     const random = Math.floor(Math.random() * wordsLevelTwo.length);
//     displayWord = wordsLevelTwo[random];
//     const wordBox = document.querySelector('#wordBox');
//     wordBox.innerHTML = displayWord;

//     body.classList.add('levelTwo');

//     setTimeout(() => {
//         wordBox.innerHTML = '';
//         enableInput();
//     }, 1000);
// }

// const levelThree = () => {
//     inputBox.disabled = true;
//     const random1 = Math.floor(Math.random() * wordsLevelThree.length);
//     const random2 = Math.floor(Math.random() * wordsLevelThree.length);
//     const word1 = wordsLevelThree[random1];
//     const word2 = wordsLevelThree[random2];

//     displayWord = `${word1} ${word2}`;
//     const wordBox = document.querySelector('#wordBox');
//     wordBox.innerHTML = displayWord;

//     body.classList.remove('levelTwo');
//     body.classList.add('levelThree');

//     setTimeout(() => {
//         wordBox.innerHTML = '';
//         enableInput();
//     }, 900);
// }
// Level One: Display 1 word
const levelOne = () => {
    inputBox.disabled = true;
    const random = Math.floor(Math.random() * wordsLevelOne.length);
    displayWord = wordsLevelOne[random];
    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    setTimeout(() => {
        wordBox.innerHTML = '';
        enableInput();
    }, 1500);
};

// Level Two: Display 2 words
const levelTwo = () => {
    inputBox.disabled = true;
    const random1 = Math.floor(Math.random() * wordsLevelTwo.length);
    const random2 = Math.floor(Math.random() * wordsLevelTwo.length);

    displayWord = `${wordsLevelTwo[random1]} ${wordsLevelTwo[random2]}`;
    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    body.classList.add('levelTwo');

    setTimeout(() => {
        wordBox.innerHTML = '';
        enableInput();
    }, 1000);
};

// Level Three: Display 3 words
const levelThree = () => {
    inputBox.disabled = true;
    const random1 = Math.floor(Math.random() * wordsLevelThree.length);
    const random2 = Math.floor(Math.random() * wordsLevelThree.length);
    const random3 = Math.floor(Math.random() * wordsLevelThree.length);

    displayWord = `${wordsLevelThree[random1]} ${wordsLevelThree[random2]} ${wordsLevelThree[random3]}`;
    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    body.classList.remove('levelTwo');
    body.classList.add('levelThree');

    setTimeout(() => {
        wordBox.innerHTML = '';
        enableInput();
    }, 900);
};


const enableInput = () => {
    inputBox.disabled = false;
    inputBox.focus();
}

// Functionality when player press Enter
inputBox.addEventListener('keypress', (e) => {
    const inputValue = document.getElementById('inputBox').value.trim(); // Trim spaces

    if (inputValue !== '' && e.key === 'Enter') {
        if (inputValue.toLowerCase() === displayWord.toLowerCase()) { // Case insensitive comparison
            sumPoints += 1;
            correctWords.push(displayWord);
            print.innerHTML += `<span style="color: green;">✅ Perfect!! (${displayWord})</span><br>`;

            if (sumPoints >= 10) {
                checkWinCondition(); // Show winning popup
            } else if (sumPoints >= 6) {
                levelThree();
            } else if (sumPoints >= 3) {
                levelTwo();
            } else {
                levelOne();
            }

            document.getElementById("inputBox").value = "";
        } else {
            noPoints += 1;
            lives -= 1;
            updateStars();
            wrongWords.push(displayWord);
            print.innerHTML += `<span style="color: red;">❌ Wrong Word!! Strike ${noPoints}!!</span><br>`;
            document.getElementById("inputBox").value = "";

            if (noPoints >= 3) {
                endGame();
            } else {
                if (sumPoints < 3) {
                    levelOne();
                } else if (sumPoints >= 3 && sumPoints < 6) {
                    levelTwo();
                } else {
                    levelThree();
                }
            }
        }
    }
});


const updateStars = () => {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.style.visibility = index < lives ? 'visible' : 'hidden'; // Show or hide stars based on lives
    });
};

// End Game and show results
const endGame = () => {
    inputBox.disabled = true;

    setTimeout(() => {
        // Create the result message with counts and words, including color coding
        const resultMessage = `
            <div style="background: white; padding: 20px; border-radius: 10px; width: 300px; text-align: center; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);">
                <h2 style="color: #333;">Game Over!</h2>
                <p><strong style="color: green;">Total Correct Words (${correctWords.length}):</strong></p>
                <p style="color: green;">${correctWords.length > 0 ? correctWords.join(', ') : 'None'}</p>
                <p><strong style="color: red;">Total Wrong Words (${wrongWords.length}):</strong></p>
                <p style="color: red;">${wrongWords.length > 0 ? wrongWords.join(', ') : 'None'}</p>
                <button onclick="location.reload()" style="background: #1e88e5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px;">Restart</button>
            </div>
        `;

        // Create the popup
        let popup = document.createElement('div');
        popup.innerHTML = resultMessage;
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '1000';
        popup.style.background = 'rgba(0, 0, 0, 0.7)'; // Darker background
        popup.style.padding = '20px';
        popup.style.borderRadius = '10px';
        popup.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)'; // Soft shadow
        popup.style.color = '#fff'; // White text color

        // Append the popup to the body
        document.body.appendChild(popup);
    }, 100); // Short delay before showing the popup
};

const checkWinCondition = () => {
    if (sumPoints >= 5) {
        inputBox.disabled = true;

        setTimeout(() => {
            // Celebration popup with confetti 🎉
            const winMessage = `
                <div style="background: white; padding: 20px; border-radius: 10px; width: 350px; text-align: center; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); position: relative;">
                    <h2 style="color: #28a745;">🎉 You Won! 🎉</h2>
                    <p><strong style="color: green;">Total Correct Words (${correctWords.length}):</strong></p>
                    <p style="color: green;">${correctWords.join(', ')}</p>
                    <button onclick="location.reload()" style="background: #1e88e5; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px;">Play Again</button>
                    <div id="confetti"></div>
                </div>
            `;

            let popup = document.createElement('div');
            popup.innerHTML = winMessage;
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.zIndex = '1000';
            popup.style.background = 'rgba(0, 0, 0, 0.7)';
            popup.style.padding = '20px';
            popup.style.borderRadius = '10px';
            popup.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
            popup.style.color = '#fff';

            document.body.appendChild(popup);
            triggerConfetti(); // Start confetti animation 🎊
        }, 100);
    }
};

// Confetti Animation 🎊
const triggerConfetti = () => {
    const confettiContainer = document.querySelector('#confetti');

    for (let i = 0; i < 30; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '8px';
        confettiPiece.style.height = '8px';
        confettiPiece.style.background = ['#ff0', '#0f0', '#00f', '#f00', '#ff0'][Math.floor(Math.random() * 5)];
        confettiPiece.style.top = Math.random() * 100 + '%';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.opacity = Math.random();
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiPiece.style.animation = `fall 2s ease-out infinite`;

        confettiContainer.appendChild(confettiPiece);
    }

    // Confetti CSS animation
    let style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(200px) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
};

// Modify the enter key event to check the win condition
inputBox.addEventListener('keypress', (e) => {
    const inputValue = document.getElementById('inputBox').value;

    if (inputValue !== '' && e.key === 'Enter') {
        if (inputValue === displayWord) {
            sumPoints += 1;
            correctWords.push(displayWord);
            print.innerHTML += `<span style="color: green;">✅ Perfect!! (${displayWord})</span><br>`;

            if (sumPoints >= 10) {
                checkWinCondition(); // Stop the game and show the winning popup
            } else if (sumPoints >= 6) {
                levelThree();
            } else if (sumPoints >= 3) {
                levelTwo();
            } else {
                levelOne();
            }

            document.getElementById("inputBox").value = "";
        } else {
            noPoints += 1;
            lives -= 1;
            updateStars();
            wrongWords.push(displayWord);
            print.innerHTML += `<span style="color: red;">❌ Wrong Word!! Strike ${noPoints}!!</span><br>`;
            document.getElementById("inputBox").value = "";

            if (noPoints >= 3) {
                endGame();
            } else {
                if (sumPoints <= 3) {
                    levelOne();
                } else if (sumPoints > 3 && sumPoints <= 6) {
                    levelTwo();
                } else {
                    levelThree();
                }
            }
        }
    }
});

  git config--global user.email "rohan"
  git config--global user.name "Your Name"