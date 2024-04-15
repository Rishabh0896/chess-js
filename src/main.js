$(function () {
    init()
    console.log("Main init called");
});

function init() {
    console.log("init() called");
}

function initFileRankBoard() {
    let file = FILES_ENUM.FILE_A
    let rank = RANKS_ENUM.RANK_1
    let sq = BOARD_SQUARES.A1
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (i < 21 || i > 98) {
            rank_board[i] = BOARD_SQUARES.OFF_BOARD;
            file_board[i] = BOARD_SQUARES.OFF_BOARD;
        } else {
            sq = fileRankToSquare()
        }
    }
}