let scoreHome = 0
let scoreGuest = 1


function leftInc1() {
    scoreHome += 1
    document.getElementById("score-home").textContent = scoreHome
    highlight()
}
function leftInc2() {
    scoreHome += 2
    document.getElementById("score-home").textContent = scoreHome
    highlight()
}
function leftInc3() {
    scoreHome += 3
    document.getElementById("score-home").textContent = scoreHome
    highlight()
}

function rightInc1() {
    scoreGuest += 1
    document.getElementById("score-guest").textContent = scoreGuest
    highlight()
}
function rightInc2() {
    scoreGuest += 2
    document.getElementById("score-guest").textContent = scoreGuest
    highlight()
}
function rightInc3() {
    scoreGuest += 3
    document.getElementById("score-guest").textContent = scoreGuest
    highlight()
}
function restart() {
    scoreGuest = 0
    scoreHome = 0
    document.getElementById("score-guest").textContent = scoreGuest
    document.getElementById("score-home").textContent = scoreHome
    document.getElementById("guest").style.color = "";
    document.getElementById("home").style.color = "";
}

function highlight() {
    if (scoreGuest > scoreHome) {
        document.getElementById("guest").style.color = "blue";
        document.getElementById("home").style.color = "";
    }
    else if (scoreHome > scoreGuest) {
        document.getElementById("home").style.color = "blue";
        document.getElementById("guest").style.color = "";
    }else {
        console.log("equal")
    }
}
