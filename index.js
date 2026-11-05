let scoreBoardHome = document.getElementById("score-board-home")
let scoreBoardGuest = document.getElementById("score-board-guest")
let score = 0
let guestAScore = 0

function plus1(){
    score+=1
    scoreBoardHome.textContent = score
    genlead()
}

function plus2(){
    score+=2
    scoreBoardHome.textContent = score
    genlead()
}

function plus3(){
    score+=3
    scoreBoardHome.textContent = score
    genlead()
}

function guest1(){
    guestAScore+=1
    scoreBoardGuest.textContent = guestAScore
    genlead()
}

function guest2(){
   guestAScore+=2
    scoreBoardGuest.textContent = guestAScore
    genlead()
}

function guest3(){
   guestAScore+=3
    scoreBoardGuest.textContent = guestAScore
    genlead()
}

let lead = document.getElementById("lead-team")
function genlead(){
      if(score > guestAScore){
        lead.innerText = "Home have the lead"
    }
    else if(guestAScore > score){
        lead.innerText = "Guest Team have the lead"
    }
    else{
        lead.innerText = "Game is tied"
    }
}

function reset(){
    score = 0
    scoreBoardHome.textContent = score
    guestAScore = 0
    scoreBoardGuest.textContent = guestAScore
    genlead()
}

// Wire up the buttons (Vite bundles index.js as a module, so inline onclick handlers can't see these functions)
const homeButtons = document.querySelectorAll(".container > div:nth-of-type(1) .add-point-btn button")
const guestButtons = document.querySelectorAll(".container > div:nth-of-type(2) .add-point-btn button")

homeButtons[0].addEventListener("click", plus1)
homeButtons[1].addEventListener("click", plus2)
homeButtons[2].addEventListener("click", plus3)

guestButtons[0].addEventListener("click", guest1)
guestButtons[1].addEventListener("click", guest2)
guestButtons[2].addEventListener("click", guest3)

lead.addEventListener("click", genlead)
document.querySelector(".reset").addEventListener("click", reset)
