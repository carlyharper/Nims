/*
16 pebbles on the table
2 players
can only take 1, 2 or 3 pebbles off the board
print board to screen - represent pebbles as asterix
2 players, keep track of who's turn it is
just need a count of how many pebbles there are
*/

console.log("NIMS");

//define state

var board = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];

var playerTurn = 1;

function printBoard(b) {
    console.log(b);

    console.log("---------------");
}

function remove(turn) {
    board.splice(0, turn);
    console.log(turn);
    printBoard(board);
}

function switchPlayers() {
    if (playerTurn == 1) {
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
}

function playerAction() {
    var move = parseInt(prompt("1, 2, or 3"));
    if (move == 1) {
        remove(1);
        switchPlayers();
    } else if (move == 2) {
        remove(2);
        switchPlayers();
    } else if (move == 3) {
        remove(3);
        switchPlayers();
    } 
}

function checkVictory() {
    if (board.length < 4) {
        console.log("Game over, player " + playerTurn + " wins");
    } else {
        console.log("Next turn");
        return "Next turn";
    }
}

function run() {
    while (checkVictory() == "Next turn") {
        playerAction();
        
    }
}




