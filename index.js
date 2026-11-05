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

