import gameLogic from './functions.js';

document.querySelector('.game__body').addEventListener('click', function (event) {
    gameLogic(event);
});