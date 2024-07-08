// create a new high score board
function createScoreBoard() {
    let scoreBoard = {
        "The Best Ever" : 1000000
    };
    return scoreBoard;
}

// add players to the score board
function addPlayer(scoreBoard, playerName, score) {
    scoreBoard[playerName] = score;
    return scoreBoard;
}

// remove players from score board
function removePlayer(scoreBoard, playerName) {
    if (scoreBoard.hasOwnProperty(playerName)) {
        delete scoreBoard[playerName];
    }
    return scoreBoard;
}

// increase player's score
function updateScore(scoreBoard, playerName, addToScore) {
    if (scoreBoard.hasOwnProperty(playerName)) {
        scoreBoard[playerName] += addToScore;
    } else {
        scoreBoard[playerName] = addToScore;
    }
    return scoreBoard;
}

// apply monday bonus points
function applyMondayBonus(scoreBoard) {
    for (let player in scoreBoard) {
        scoreBoard[player] += 100;
    }
    return scoreBoard;
}

// normalize high score
function normalizeScore(obj) {
    const {score, normalizeScore} = obj;
    const normalizedScore = normalizeFunction(score);
    return normalizedScore;
}