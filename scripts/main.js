const boxBoard = document.querySelector('.board');
const html = document.getElementsByTagName('bod')
const pontuationPlayer1 = document.querySelector('#pontuation-player1')
const pontuationPlayer2 = document.querySelector('#pontuation-player2')
const user1 = document.querySelector('#user1')
const user2 = document.querySelector('#user2')
let round = 0;
const board = [
    { home: '0' }, { home: '1' }, { home: '2' },
    { home: '3' }, { home: '4' }, { home: '5' },
    { home: '6' }, { home: '7' }, { home: '8' },
];

function move(id) {
    const home = id.target

    const found = board.find(x => x.home == home.id);

    if (round % 2 == 0) {
        found.home = 'x';
        movePlayer1(home)
    }
    else {
        found.home = 'o';
        movePlayer2(home)
    }
}

function movePlayer1(home) {
    const icon = document.createElement('img')
    icon.setAttribute('class', 'simbol')
    if (home.childElementCount == 0) {
        icon.src = "../icons/close_24px_outlined.svg"
    }
    home.appendChild(icon)

    if (board[0].home == 'x' && board[1].home == 'x' && board[2].home == 'x') {
        winPlayer1();
    }
    else if (board[3].home == 'x' && board[4].home == 'x' && board[5].home == 'x') {
        winPlayer1();
    }
    else if (board[6].home == 'x' && board[7].home == 'x' && board[8].home == 'x') {
        winPlayer1();
    }

    if (board[0].home == 'x' && board[3].home == 'x' && board[6].home == 'x') {
        winPlayer1();
    }
    else if (board[1].home == 'x' && board[4].home == 'x' && board[7].home == 'x') {
        winPlayer1();
    }
    else if (board[2].home == 'x' && board[5].home == 'x' && board[8].home == 'x') {
        winPlayer1();
    }

    if (board[0].home == 'x' && board[4].home == 'x' && board[8].home == 'x') {
        winPlayer1();
    }
    else if (board[2].home == 'x' && board[4].home == 'x' && board[6].home == 'x') {
        winPlayer1();
    }
    round++;
}

function movePlayer2(home) {
    const icon = document.createElement('img')
    icon.setAttribute('class', 'simbol')
    if (home.childElementCount == 0) {
        icon.src = "../icons/radio_button_unchecked_24px_outlined.svg"
    }
    home.appendChild(icon)
    if (board[0].home == 'o' && board[1].home == 'o' && board[2].home == 'o') {
        winPlayer2();
    }
    else if (board[3].home == 'o' && board[4].home == 'o' && board[5].home == 'o') {
        winPlayer2();
    }
    else if (board[6].home == 'o' && board[7].home == 'o' && board[8].home == 'o') {
        winPlayer2();
    }

    if (board[0].home == 'o' && board[3].home == 'o' && board[6].home == 'o') {
        winPlayer2();
    }
    else if (board[1].home == 'o' && board[4].home == 'o' && board[7].home == 'o') {
        winPlayer2();
    }
    else if (board[2].home == 'o' && board[5].home == 'o' && board[8].home == 'o') {
        winPlayer2();
    }

    if (board[0].home == 'o' && board[4].home == 'o' && board[8].home == 'o') {
        winPlayer2();
    }
    else if (board[2].home == 'o' && board[4].home == 'o' && board[6].home == 'o') {
        winPlayer2();
    }
    round++;
}

function winPlayer1() {
    pontuationPlayer1.value = parseInt(pontuationPlayer1.value) + 1;
    user1.src = '../icons/sentiment_very_satisfied_24px_outlined.svg'
    user2.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
    clearBoard();
    round = 0;
}

function winPlayer2() {
    pontuationPlayer2.value = parseInt(pontuationPlayer2.value) + 1
    user1.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
    user2.src = '../icons/sentiment_very_satisfied_24px_outlined.svg'
    clearBoard();
    round = 0;
}

function reset(){
    
}

boxBoard.addEventListener('click', move);