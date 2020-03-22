var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

const plater1_Button = document.getElementById('player1')
const plater2_Button = document.getElementById('player2')

class player {
    constructor(name, position, money) {
        this.ame = name;
        this.position = position;
        this.money = money;
    }
    rolldice() {
        let pos = math.floor(math.random() * 6) + 1;
        console.log(pos);
        this.updatePosition(pos);

    }

    updatePosition(pos) {
        this.position += pos;
        console.log(this.position);
        this.updatemoney;
    }

    updatemoney() {
        if (this.position < board.length)
            this.money = board[this.position];
        else {
            this.position %= 15;
            this.money = board[this.position];
        }
        console.log(player);
        console.log(player2);
    }
}

var player1 = ["proGrad", 0, 1000];
var player2 = ["faceprep", 0, 1000];
player1_Button.addEventlistener('click', function () {
    player1.rolldice()
}, false);
player2_Button.addEventlistener('click', function () {
    player2.rolldice();
}, false);