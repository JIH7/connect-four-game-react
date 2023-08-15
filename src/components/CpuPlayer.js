const cpuMove = (board, player) => {
    const opponent = (player === 'x') ? 'o' : 'x';

    // Check for a winning move
    for (let col = 0; col < 7; col++) {
        if (isValidMove(board, col)) {
            const row = getNextAvailableRow(board, col);
            board[row][col] = player;
            if (checkForWin(board, player)) {
                board[row][col] = ''; // Reset the move
                return col;
            }
            board[row][col] = ''; // Reset the move
        }
    }

    // Check for blocking opponent's win
    for (let col = 0; col < 7; col++) {
        if (isValidMove(board, col)) {
            const row = getNextAvailableRow(board, col);
            board[row][col] = opponent;
            if (checkForWin(board, opponent)) {
                board[row][col] = ''; // Reset the move
                return col;
            }
            board[row][col] = ''; // Reset the move
        }
    }

    // Choose a random available move
    const availableMoves = getAvailableMoves(board);
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    return randomMove;
};

// Helper function to check if a column is a valid move
const isValidMove = (board, col) => {
    return board[0][col] === '';
};

// Helper function to get the next available row in a column
const getNextAvailableRow = (board, col) => {
    for (let row = 5; row >= 0; row--) {
        if (board[row][col] === '') {
            return row;
        }
    }
};

// Helper function to get available moves
const getAvailableMoves = (board) => {
    const availableMoves = [];
    for (let col = 0; col < 7; col++) {
        if (isValidMove(board, col)) {
            availableMoves.push(col);
        }
    }
    return availableMoves;
};

// Helper function to check for a win
const checkForWin = (board, player) => {
    // Check horizontally
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col <= 3; col++) {
            if (
                board[row][col] === player &&
                board[row][col + 1] === player &&
                board[row][col + 2] === player &&
                board[row][col + 3] === player
            ) {
                return true;
            }
        }
    }

    // Check vertically
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row <= 2; row++) {
            if (
                board[row][col] === player &&
                board[row + 1][col] === player &&
                board[row + 2][col] === player &&
                board[row + 3][col] === player
            ) {
                return true;
            }
        }
    }

    // Check diagonals
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 3; col++) {
            if (
                board[row][col] === player &&
                board[row + 1][col + 1] === player &&
                board[row + 2][col + 2] === player &&
                board[row + 3][col + 3] === player
            ) {
                return true;
            }
        }
    }

    for (let row = 0; row <= 2; row++) {
        for (let col = 3; col < 7; col++) {
            if (
                board[row][col] === player &&
                board[row + 1][col - 1] === player &&
                board[row + 2][col - 2] === player &&
                board[row + 3][col - 3] === player
            ) {
                return true;
            }
        }
    }

    return false;
};

// Usage example
const board = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
];

const currentPlayer = 'X';
const cpuPlayer = 'O';

export default cpuMove
