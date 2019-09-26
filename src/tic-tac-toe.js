class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [[[],[],[]],
                       [[],[],[]],
                       [[],[],[]]];
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        let finish = this.isFinished();
        if ((finish == true)
            || (game.noMoreTurns() == true)) {
            this.matrix = [[[],[],[]],
                           [[],[],[]],
                           [[],[],[]]];
            this.turn = 0;
        }

        if (this.matrix[rowIndex][columnIndex] == '') {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x'
                && finish == false) {
                this.currentPlayerSymbol = 'o';
            } else if (this.currentPlayerSymbol == 'o'
                && finish == false) {
                    this.currentPlayerSymbol = 'x';
            }
            this.turn++;
        }
    }

    isFinished() {
        if (this.getWinner() != null || this.isDraw() == true) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let winner = null;
        // crossed rows
        for (let i = 0; i < 3; i++) {
            if(this.matrix[i][0] == this.matrix[i][1]
            && this.matrix[i][0] == this.matrix[i][2]) {
                winner = this.matrix[i][0];
            }
        }
        // crossed columns
        for (let i = 0; i < 3; i++) {
            if(this.matrix[0][i] == this.matrix[1][i]
            && this.matrix[0][i] == this.matrix[2][i]) {
                winner = this.matrix[0][i];
            }
        }
        // crossed diagonals
        if ((this.matrix[0][0] == this.matrix[1][1]
        && this.matrix[0][0] == this.matrix[2][2])
        || (this.matrix[0][2] == this.matrix[1][1]
        && this.matrix[0][2] == this.matrix[2][0])) {
            winner = this.matrix[1][1][0];
        }
        return winner;
    }

    noMoreTurns() {
        if (this.turn == 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if ((this.noMoreTurns() == true && this.getWinner() == null)) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] != '') {
            return this.matrix[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
let game = new TicTacToe();
game.nextTurn(0, 1)
game.nextTurn(1, 2)
game.nextTurn(0, 2)
game.nextTurn(0, 0)
game.nextTurn(1, 1)
game.nextTurn(0, 0)
game.nextTurn(1, 1)
console.log(game.matrix)
console.log(game.getCurrentPlayerSymbol())
// console.log(game.getWinner())
// console.log(game.noMoreTurns())
// console.log(game.isDraw())
