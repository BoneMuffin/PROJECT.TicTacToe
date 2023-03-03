// module for the gameboard 
const gameBoard =  (function() {
    // store the gameboard as an array inside of a Gameboard object
        let board = [ 
            [0,0,0], 
            [0,0,0], 
            [0,0,0] 
        ];
        return {board}
});

// module for the players to take turns
let displayController = (function() {
    let test = () => {};
    return {};
});

// factory for players ( two ), players should be stored as objects
const playerFactory = (name, mark) => {
        return {name: name, mark: mark}
};

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Player 2', 'O');
displayController;
        
// module for array display to the gameboard
const renderArray = (function() {
       const boxes = document.querySelectorAll('.box');
       boxes[0].textContent = gameBoard.board;
        return {}
});



// object to control the flow of the game








/*  implementing a few css classes dedicated to the three states of your table cells (no selection, X selection, O selection).
 That way each cell can have one of those styles. 
 Then I'd put an onclick in each table cell calling a function that will change the styling to whatever you want (X or O or nothing).

 Always start with the fundamental part of your game and build outwards.

The fundamental act of tic tac toe, at it's most fundamental, is choosing a square.

Can you make a 3x3 grid and select a square?

Next can you make selecting a square put an X there?

Then can you make the next selection be an O?

Then can you make it so you can put an X or O on an existing X or O?

Can you then detect 3 in a row?

It's almost always easier to start low level and add on.
 With games, no AI alternating turn "hotseat" with human players is almost always the way to start. Later you can add AI. */


/* Make a gameboard class or function which makes gameboard objects with all the logic about a win. Make a player object the same way.
Use css grid with html to make a board. When a square is clicked check the array to make sure it's empty at that position. 
If so change the innertext to the player.piece and check the boards logic that determines if there is a winner.*/