// For displaying 'Make Your Move' message with typing effect.
const texttowrite = "Make Your Move !!";
function typewriter() {
    let curIndex = 0;
    const textContainer = document.getElementById('msg');

    function type() {
        if (curIndex < texttowrite.length){
            textContainer.textContent += texttowrite.charAt(curIndex);
            curIndex++;
            setTimeout(type, 150);
        }
    }
    type();
}
window.addEventListener('load', typewriter());

let userscore = 0;
let compscore = 0;
let compscore_span = document.getElementById('compscore');
let userscore_span = document.getElementById('userscore');
let display_msg = document.querySelector('.display-msg > p');
let scoreboard = document.querySelector('.score-board');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');


function computerChoice() {
    choices = ['r', 'p', 's'];
    let randomchoice = Math.floor(Math.random()*3);
    return choices[randomchoice];
}


function game(user_choice) {
    const compchoice = computerChoice();

    switch(user_choice + compchoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(user_choice, compchoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(user_choice, compchoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(user_choice, compchoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', function(){
        game('r');
    })

    paper.addEventListener('click', function(){
        game('p');
    })

    scissors.addEventListener('click', function(){
        game('s');
    })
}
main();

function win(user_choice, compchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    switch(user_choice){
        case 'r':
            display_msg.innerHTML = `Rock (user) beats Scissors (comp), You win! 🎊`;
            break;
        case 'p':
            display_msg.innerHTML = `Paper (user) covers Rock (comp), You win! 🎊`;
            break;
        case 's':
            display_msg.innerHTML = 'Scissors (user) cuts Paper (comp), You win! 🎊';
            break;
    }
}

function lose(user_choice, compchoice) {
    compscore++;
    compscore_span.innerHTML = compscore;
    switch(user_choice){
        case 's':
            display_msg.innerHTML = `Rock (comp) beats Scissors (user), You lose.. 🫠`;
            break;
        case 'r':
            display_msg.innerHTML = `Paper (comp) covers Rock (user), You lose.. 🫠`;
            break;
        case 'p':
            display_msg.innerHTML = 'Scissors (comp) cuts Paper (user), You lose.. 🫠';
            break;
    }
}

function draw(user_choice, compchoice) {
        display_msg.innerHTML = "It's a draw ⚔️";
}

