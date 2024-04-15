function fileRankToSquare(file, rank) {
    return ((21 + file) + (rank * 10));
}

module.exports = fileRankToSquare