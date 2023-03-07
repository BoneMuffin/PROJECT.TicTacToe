// DOM Elements
const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const vsHuman = document.querySelector('#vsHuman');
const vsAI = document.querySelector('#vsAI');
const boxes = document.querySelectorAll('.box');

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Game logic

// module for the gameboard 
const GameBoard =  (function() {
    // store the gameboard as an array inside of a Gameboard object
        let board = ["", "", "", "", "", "", "", "", ""];
        
        //board is inaccessible to other modules, but they can fetch it
        const getBoard = () => {
            return board;
            }

        const resetGameBoard = () => {
             board = [["", "", "", "", "", "", "", "", ""]];
            }

        return {getBoard, resetGameBoard}
})();

// module for highlighting the player's turn, the winner player and the winning combo, reset board
let DisplayController = (function() {
    return {};
})();

// factory for players ( two ), players should be stored as objects
const playerFactory = (name, mark) => {
        return {name: name, mark: mark}
};
        
// module for array display to the gameboard
const RenderArray = (function() {
    boxes[0].textContent = GameBoard.board;
    
    board.forEach
})();

let Player1 = playerFactory('Player 1', 'X');
let Player2 = playerFactory('Player 2', 'O');
DisplayController;

// 4. functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM
// the logic that keeps players from playing in spots that are already taken
// Each little piece of functionality should be able to fit in the game, player or gameboard objects

// 5. the logic that checks for when the game is over! Should check for 3-in-a-row and a tie

//6. add a display element that congratulates the winning player!

// DOM + Event listeners