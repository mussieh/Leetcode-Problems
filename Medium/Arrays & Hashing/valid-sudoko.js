function isValidSudoku(board) {
    console.log(`validate column: ${validateColumn(board)}`);
    console.log(`validate row: ${validateRow(board)}`);
    console.log(`validate boxes: ${validateBoxes(board)}`);

    return validateRow(board) && validateColumn(board) && validateBoxes(board);
}

function validateColumn(board) {
    let columnObject = {};
    for (let column = 0; column < board.length; column++) {
        columnObject = {};
        for (let row = 0; row < board.length; row++) {
            columnObject[board[row][column]] = columnObject[board[row][column]]
                ? columnObject[board[row][column]] + 1
                : 1;
            if (
                board[row][column] != "." &&
                columnObject[board[row][column]] > 1
            ) {
                return false;
            }
        }
    }
    return true;
}

function validateRow(board) {
    let rowObject = {};
    for (let row = 0; row < board.length; row++) {
        rowObject = {};
        for (let column = 0; column < board.length; column++) {
            rowObject[board[row][column]] = rowObject[board[row][column]]
                ? rowObject[board[row][column]] + 1
                : 1;
            if (
                board[row][column] != "." &&
                rowObject[board[row][column]] > 1
            ) {
                return false;
            }
        }
    }
    return true;
}

function validateBoxes(board) {
    let boxObject = {};
    let boxCount = 0;
    let rowStart = 0;
    let rowEnd = 3;
    let columnStart = 0;
    let columnEnd = 3;

    while (boxCount < board.length) {
        boxObject = {};
        for (let row = rowStart; row < rowEnd; row++) {
            for (let column = columnStart; column < columnEnd; column++) {
                boxObject[board[row][column]] = boxObject[board[row][column]]
                    ? boxObject[board[row][column]] + 1
                    : 1;
                if (
                    board[row][column] != "." &&
                    boxObject[board[row][column]] > 1
                ) {
                    return false;
                }
            }
        }
        boxCount++;
        columnStart += 3;
        columnEnd += 3;
        if (boxCount % 3 === 0) {
            rowStart = boxCount;
            rowEnd = rowStart + 3;
            columnStart = 0;
            columnEnd = 3;
        }
    }
    return true;
}

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
