const cpuMove = (board, player) => {
    const opponent = (player === 'X') ? 'O' : 'X';

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
    // ... Your existing win-checking code here ...
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

const cpuColumn = cpuMove(board, cpuPlayer);
console.log(`CPU chooses column ${cpuColumn}`);
