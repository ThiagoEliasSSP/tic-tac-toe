const board = document.querySelector(".board");
let boxBoard = ['', '', '', '', '', '', '', '', ''];
const symbols = ['X', 'O']
const imgSymbols = ['../icons/close_24px_outlined.svg', '../icons/radio_button_unchecked_24px_outlined.svg'];
let turn = 0;
const sequenceWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const namePlayer1 = document.getElementById("name-player1")
const namePlayer2 = document.getElementById("name-player2")

for (let i = 0; i < boxBoard.length; i++) {
    let house = document.createElement('li');
    house.setAttribute('class', 'house')
    house.setAttribute('id', i)
    house.innerHTML = boxBoard[i];
    board.appendChild(house)
}

function move(id) {
    const house = id.target

    if (boxBoard[house.id] === '') {
        boxBoard[house.id] = symbols[turn];
        let img = document.createElement('img')
        img.src = imgSymbols[turn]
        house.appendChild(img)
        winner();
        change();
    }
}

function winner() {
    for (win in sequenceWinner) {
        if (boxBoard[sequenceWinner[win][0]] == symbols[turn] &&
            boxBoard[sequenceWinner[win][1]] == symbols[turn] &&
            boxBoard[sequenceWinner[win][2]] == symbols[turn]) {
            playerWinner()
        }
    }
}

function playerWinner() {
    const pontuationPlayer1 = document.getElementById("pontuation-player1")
    const imgUser1 = document.getElementById("img-user1")

    const pontuationPlayer2 = document.getElementById("pontuation-player2")
    const imgUser2 = document.getElementById("img-user2")

    if (turn === 0) {
        pontuationPlayer1.value = parseInt(pontuationPlayer1.value) + 1
        imgUser1.src = '../icons/sentiment_very_satisfied_24px_outlined.svg'
        imgUser2.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
    }
    else {        
        pontuationPlayer2.value = parseInt(pontuationPlayer2.value) + 1
        imgUser2.src = '../icons/sentiment_very_satisfied_24px_outlined.svg'
        imgUser1.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
    }
}

function change() {
    turn === 0 ? turn = 1 : turn = 0
}

board.addEventListener('click', move)