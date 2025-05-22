let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")


// declaration of methods

//reset score
function resetScores(){
    
    homeScore = 0
    guestScore = 0
    
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}

// home +1
function plusOneHome(){
    
    homeScore += 1
    
    homeEl.textContent = homeScore
}

//guest +1
function plusOneGuest(){
    
    guestScore += 1
    
    guestEl.textContent = guestScore
}

// home +2
function plusTwoHome(){
    
    homeScore += 2
    
    homeEl.textContent = homeScore
}

//guest +2
function plusTwoGuest(){
    
    guestScore += 2
    
    guestEl.textContent = guestScore
}
// home +3
function plusThreeHome(){
    
    homeScore += 3
    
    homeEl.textContent = homeScore
}

//guest +3
function plusThreeGuest(){
    
    guestScore += 3
    
    guestEl.textContent = guestScore
}
