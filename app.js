var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const plater1_Button = document.getElementById('player1')
const plater2_Button = document.getElementById('player2')
console.log(player1 - button);

player1_Button.addEventlistener('click', rolldice1)

var player1 = ["proGrad", 0, 1000];
var player1 = ["faceprep", 0, 1000];

function rolldice1() {
    let position = math.floor(math.random() * 6) + 1;
    console.log("player 1 rolls", position)
    changeposition1(player1[1], position);
}

function changeposition1(old, currentpos) {
    var newposition = old + currentpos;
    player1[1] = newposition;
    console.log(player1[1]);
    updatemoney1(player1[1]);

}

function updatemoney1(p1) {
    var updatemoney = 0;
    if (p1 < board.length)
        updatemoney = player1[1] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player1[1] - board[p1 - 1];
    }
    console.log(updatemoney);
}

function rolldice2() {
    let position = math.floor(math.random() * 6) + 1;
    console.log("player 1 rolls", position)
    changeposition1(player2[1], position);
}

function changeposition2(old, currentpos) {
    var newposition = old + currentpos;
    player2[1] = newposition;
    console.log(player2[1]);
    updatemoney1(player2[1]);

}

function updatemoney2(p2) {
    var updatemoney = 0;
    if (p2 < board.length)
        updatemoney = player2[1] - board[p1 - 1];
    else {
        p2 = p2 % 15;
        updatemoney = player2[1] - board[p2 - 1];
    }
    console.log(updatemoney);
}