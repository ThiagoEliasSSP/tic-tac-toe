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
const boxPlayer1 = document.getElementById("player1")
const namePlayer1 = document.getElementById("name-player1")
const boxPlayer2 = document.getElementById("player2")
const namePlayer2 = document.getElementById("name-player2")
const boxReload = document.querySelector('#reload')
const reloadPage = document.querySelector('#reseatPage')

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
        img.setAttribute('id', `img${house.id}`)
        house.appendChild(img)
        winner();
        change();
        if (winner() == false) {
            const imgUser1 = document.getElementById("img-user1")
            const imgUser2 = document.getElementById("img-user2")
            imgUser2.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
            imgUser1.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
            const boxWinner = document.querySelector('.box-winner')
            const txtWinner = document.querySelector('#player-winner')
            txtWinner.innerHTML = `Empate`
            boxWinner.setAttribute('class', 'box-winner active')
        }
    }
}

function winner() {
    for (win in sequenceWinner) {
        if (boxBoard[sequenceWinner[win][0]] == symbols[turn] &&
            boxBoard[sequenceWinner[win][1]] == symbols[turn] &&
            boxBoard[sequenceWinner[win][2]] == symbols[turn]) {
            playerWinner();
            return true;
        }
        else {
            if (boxBoard.indexOf('') == -1) {
                return false;
            }
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
        const boxWinner = document.querySelector('.box-winner')
        const txtWinner = document.querySelector('#player-winner')
        txtWinner.innerHTML = `${namePlayer1.value} Venceu!`
        boxWinner.setAttribute('class', 'box-winner active')
        board.style.pointerEvents = 'none'
    }
    else if (turn === 1) {
        pontuationPlayer2.value = parseInt(pontuationPlayer2.value) + 1
        imgUser2.src = '../icons/sentiment_very_satisfied_24px_outlined.svg'
        imgUser1.src = '../icons/sentiment_very_dissatisfied_24px_outlined.svg'
        const boxWinner = document.querySelector('.box-winner')
        const txtWinner = document.querySelector('#player-winner')
        txtWinner.innerHTML = `${namePlayer2.value} Venceu!`
        boxWinner.setAttribute('class', 'box-winner active')
        board.style.pointerEvents = 'none'
    }
}

function change() {
    turn === 0 ? turn = 1 : turn = 0
}

function reload() {
    const boxWinner = document.querySelector('.box-winner')
    boxWinner.setAttribute('class', 'box-winner')

    for (h in boxBoard) {
        if (boxBoard[h] != '') {
            let imgSymbol = document.getElementById(`img${h}`)
            let house = document.getElementById(h)
            house.removeChild(imgSymbol);
            turn = 0;
        }
    }
    boxBoard.fill('');

    const imgUser1 = document.getElementById("img-user1")
    const imgUser2 = document.getElementById("img-user2")

    imgUser1.src = '../icons/sentiment_satisfied_24px_outlined.svg'
    imgUser2.src = '../icons/sentiment_satisfied_24px_outlined.svg'
    board.style.pointerEvents = 'initial'
}

function setnamePlayer1() {
    namePlayer1.value = prompt('Digite o nome do jogador')
}

function setnamePlayer2() {
    namePlayer2.value = prompt('Digite o nome do jogador')
}

function resetPage() {
    location.reload(true);
}

boxPlayer1.addEventListener('click', setnamePlayer1)
boxPlayer2.addEventListener('click', setnamePlayer2)
boxReload.addEventListener('click', reload)
board.addEventListener('click', move)
reloadPage.addEventListener('click', resetPage)