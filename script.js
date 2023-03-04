const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const vsHuman = document.querySelector('#vsHuman');
const vsAI = document.querySelector('#vsAI');

// module for the gameboard 
const GameBoard =  (function() {
    // store the gameboard as an array inside of a Gameboard object
        let board = ["", "", "", "", "", "", "", "", ""];
        
        //board is inaccessible to other modules, but they can fetch it
        const getBoard = () => {
            return board;
            }
})();

// module for the players to take turns
let DisplayController = (function() {
    let test = () => {};
    return {};
})();

// factory for players ( two ), players should be stored as objects
const playerFactory = (name, mark) => {
        return {name: name, mark: mark}
};

let Player1 = playerFactory('Player 1', 'X');
let Player2 = playerFactory('Player 2', 'O');
DisplayController;
        
// module for array display to the gameboard
const RenderArray = (function() {

    const boxes = document.querySelectorAll('.box');
    boxes[0].textContent = GameBoard.board;
        return {}
})();



// object to control the flow of the game
