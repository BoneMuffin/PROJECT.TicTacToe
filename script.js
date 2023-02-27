// module for a gameboard 
const gameboard =  (function() {
    // store the gameboard as an array inside of a Gameboard object
        let board = [ [0,0,0], [0,0,0], [0,0,0] ];

        return {

        }
});

        
// module for displayController
const displayController = (function() {
        let = () => {}
        return {
            
        }
});

// factory for players ( two ), players should be stored as objects
const playerFactory = (mark, score) => {
    let getPlayer = () => {
        return {
            mark: mark, 
            score: score,
        }
    }
    
};

let player1 = playerFactory('1', 'X');
let player2 = playerFactory('2', 'O');

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