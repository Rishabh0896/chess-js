const fileRankToSquare = require('../src/utils/boardUtils')
const {FILES_ENUM, RANKS_ENUM} = require("../src/constants");

describe('fileRankToSquare', () => {
    test('returns the correct square index for valid file and rank', () => {
        expect(fileRankToSquare(FILES_ENUM.FILE_A, RANKS_ENUM.RANK_1)).toBe(21); // File A, Rank 1
        expect(fileRankToSquare(FILES_ENUM.FILE_H, RANKS_ENUM.RANK_8)).toBe(98); // File H, Rank 8
        expect(fileRankToSquare(FILES_ENUM.FILE_D, RANKS_ENUM.RANK_5)).toBe(64); // File D, Rank 5
    });

    test('handles invalid file and rank values', () => {
        // TODO
    });
});