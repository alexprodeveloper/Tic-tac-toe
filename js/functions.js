let timeForX = true;
let gameOver = false;
let restartBtn = document.querySelector('.restart');
let cells = Array.from(document.querySelectorAll('.cell'));
let move = document.querySelector('.move');
function isFullfield(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function checkWinner() {
    let textContent = [];
    for (let i = 0; i < cells.length; i++) {
        textContent.push(cells[i].textContent);
    }
    let win1 = textContent[0] + textContent[1] + textContent[2];
    let win2 = textContent[3] + textContent[4] + textContent[5];
    let win3 = textContent[6] + textContent[7] + textContent[8];
    let win4 = textContent[0] + textContent[3] + textContent[6];
    let win5 = textContent[1] + textContent[4] + textContent[7];
    let win6 = textContent[2] + textContent[5] + textContent[8];
    let win7 = textContent[0] + textContent[4] + textContent[8];
    let win8 = textContent[6] + textContent[4] + textContent[2];

    if (win1 === 'XXX' || win1 === 'OOO') {
        gameOver = true;
        cells[0].style.color = 'tomato';
        cells[1].style.color = 'tomato';
        cells[2].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win2 === 'XXX' || win2 === 'OOO') {
        gameOver = true;
        cells[3].style.color = 'tomato';
        cells[4].style.color = 'tomato';
        cells[5].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win3 === 'XXX' || win3 === 'OOO') {
        gameOver = true;
        cells[6].style.color = 'tomato';
        cells[7].style.color = 'tomato';
        cells[8].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win4 === 'XXX' || win4 === 'OOO') {
        gameOver = true;
        cells[0].style.color = 'tomato';
        cells[3].style.color = 'tomato';
        cells[6].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win5 === 'XXX' || win5 === 'OOO') {
        gameOver = true;
        cells[1].style.color = 'tomato';
        cells[4].style.color = 'tomato';
        cells[7].style.color = 'tomato';
        if (timeForX === true) {
            movemove.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win6 === 'XXX' || win6 === 'OOO') {
        gameOver = true;
        cells[2].style.color = 'tomato';
        cells[5].style.color = 'tomato';
        cells[8].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win7 === 'XXX' || win7 === 'OOO') {
        gameOver = true;
        cells[0].style.color = 'tomato';
        cells[4].style.color = 'tomato';
        cells[8].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }

    else if (win8 === 'XXX' || win8 === 'OOO') {
        gameOver = true;
        cells[6].style.color = 'tomato';
        cells[4].style.color = 'tomato';
        cells[2].style.color = 'tomato';
        if (timeForX === true) {
            move.textContent = 'Нолики победили';
        } else {
            move.textContent = 'Крестики победили';
        }
    }
    if (gameOver === true || isFullfield(cells)) {
        restartBtn.classList.remove('hidden');
    }
}

restartBtn.addEventListener('click', function () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].style.color = 'black';
    }
    move.textContent = 'Ход крестиков';
    gameOver = false;
    timeForX = true;
    restartBtn.classList.add('hidden');
});

function isFullFilled() {
    let length = 0;
    let result = false;
    let cells = Array.from(document.querySelectorAll('.cell'));
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent) {
            length++;
        }
    }
    if (length === 9 && move.textContent !== 'Нолики победили' && move.textContent !== 'Крестики победили') {
        result = true;
    }
    return result;
}

function gameLogic(event) {
    if (event.target.classList.contains('cell') && event.target.textContent === '' && !gameOver) {
        if (timeForX === true) {
            event.target.textContent = 'X';
            timeForX = false;
            move.textContent = 'Ход ноликов';
            checkWinner();
        } else {
            event.target.textContent = 'O';
            timeForX = true;
            move.textContent = 'Ход крестиков';
            checkWinner();
        }
        if (isFullFilled()) {
            move.textContent = 'Ничья';
        }
    }
}

export default gameLogic;