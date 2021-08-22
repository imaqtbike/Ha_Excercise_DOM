"use strict"
let secrectNumber = Math.trunc(Math.random() * 20 ) +1;
let score = 20;

function message(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value)

    if(!guess) {
       message('⛔ No Number');
    }
    //when player win 
    else if (guess === secrectNumber) {
        message('🎉 Congratulations');
        document.querySelector('.number').textContent = secrectNumber;
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30rem';
    }
    //when player guess wrong
    else if (guess !== secrectNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess > secrectNumber ? 'Too High' : 'Too Low'
            score--;
            document.querySelector('.score').textContent = score
        } else if (score < 1) {
            message('😢 You lose the game')
            document.querySelector('body').style.backgroundColor = 'Red';
            score = 0;    
        } 
    }
})

document.querySelector('.again').addEventListener('click', () => {
    location.reload();
})
