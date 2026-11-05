const scoreBoardHome = document.getElementById("score-board-home")
const scoreBoardGuest = document.getElementById("score-board-guest")
const lead = document.getElementById("lead-team")
const resetBtn = document.getElementById("reset-btn")

let homeScore = 0
let guestScore = 0

function render() {
    scoreBoardHome.textContent = homeScore
    scoreBoardGuest.textContent = guestScore
    genlead()
}

function addPoints(team, points) {
    if (team === "home") {
        homeScore += points
    } else {
        guestScore += points
    }
    render()
}

function genlead() {
    if (homeScore > guestScore) {
        lead.textContent = "HUMANS have the lead"
    } else if (guestScore > homeScore) {
        lead.textContent = "ALIENS have the lead"
    } else {
        lead.textContent = "Game is tied"
    }
}

function reset() {
    homeScore = 0
    guestScore = 0
    render()
}

document.querySelectorAll("[data-team][data-points]").forEach((btn) => {
    btn.addEventListener("click", () => {
        addPoints(btn.dataset.team, Number(btn.dataset.points))
    })
})

lead.addEventListener("click", genlead)
resetBtn.addEventListener("click", reset)
