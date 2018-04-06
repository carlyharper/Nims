/*
16 pebbles on the table
2 players
can only take 1, 2 or 3 pebbles off the board
print board to screen - represent pebbles as asterix
2 players, keep track of who's turn it is
just need a count of how many pebbles there are
*/

console.log("you have 16 pebbles. to win the game, you must select the last pebble. you are playing the computer.");

//define state

var pebbles = 16;
var isPlayerOnesTurn = true;

function printBoard() {
    console.log("there are " + pebbles + " pebbles left");
}

function takeTurn() {
    var numPebblesToRemove = parseInt(prompt("How many pebbles do you want to remove?"));
    if (numPebblesToRemove > 0 && numPebblesToRemove < 4) {
        pebbles -= numPebblesToRemove;
        isPlayerOnesTurn = !isPlayerOnesTurn;
    } else {
        console.log("enter a valid amount");
    }         
}

function run() {
    while (pebbles > 0) {
        printBoard();
        takeTurn();
    }
}

var playerText = "One"
    if (!isPlayerOnesTurn) {
        playerText = "Two"
    }
console.log("game over! Player" + playerText + " 's turn");


