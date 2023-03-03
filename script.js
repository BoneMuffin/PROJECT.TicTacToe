const boxes = document.querySelectorAll('.box');
const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const vsHuman = document.querySelector('#vsHuman');
const vsAI = document.querySelector('#vsAI');

// module for the gameboard 
const gameBoard =  (function() {
    // store the gameboard as an array inside of a Gameboard object
        let board = [ 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0] 
        ];
        return {board}
})();

// module for the players to take turns
let displayController = (function() {
    let test = () => {};
    return {};
})();

// factory for players ( two ), players should be stored as objects
const playerFactory = (name, mark) => {
        return {name: name, mark: mark}
};

let Player1 = playerFactory('Player 1', 'X');
let Player2 = playerFactory('Player 2', 'O');
displayController;
        
// module for array display to the gameboard
const renderArray = (function() {
       boxes[0].textContent = gameBoard.board;
        return {}
})();



// object to control the flow of the game
