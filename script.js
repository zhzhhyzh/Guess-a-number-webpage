'use strict';

let answer = Math.trunc(Math.random() * 20) + 1; //it will random the number and it will be the range of 20
let score = 10;
let highscore = 0;
const displayMessage = message => {
    document.querySelector('.message').textContent = message
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    //When there is not number input
    if (!guess) {
        displayMessage('⛔️ No number!')

        //When players win
    } else if (guess === answer) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = answer;
        document.querySelector('.number').style.width = '15rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when player guess wrong
    } else if (guess !== answer) {
        if (score > 1) {
            displayMessage(guess > answer ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#AA0000';
            document.querySelector('.number').textContent = answer;
            document.querySelector('.number').style.width = '30rem';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    answer = Math.trunc(Math.random() * 20) + 1;
    score = 10

    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})

