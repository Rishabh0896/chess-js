import {BOARD_SIZE, BOARD_SQUARES, FILES_ENUM, RANKS_ENUM} from './constants.js';

let file_board = new Array(BOARD_SIZE);
let rank_board = new Array(BOARD_SIZE);

$(function () {
    init()
    console.log("Main init called");
});

function init() {
    console.log("init() called");
}

function initFileRankBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        rank_board[i] = BOARD_SQUARES.OFF_BOARD;
        file_board[i] = BOARD_SQUARES.OFF_BOARD;
    }

    for (let rank = RANKS_ENUM.RANK_1; rank < RANKS_ENUM.RANK_8; rank++) {
        for (let file = FILES_ENUM.FILE_A; file < FILES_ENUM.FILE_H; file++) {
            let sq = fileRankToSquare(file, rank)
            file_board[sq] = file;
            rank_board[sq] = rank;
        }
    }
}