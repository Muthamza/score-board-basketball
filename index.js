// let homeFoulTimeBtn = document.getElementById("home-foul-btn")
let homeFoulEl = document.getElementById("home-foul-el")
let homeFoulTimes = 0 

function homeFoul () {
   homeFoulTimes += 1 
   homeFoulEl.textContent = homeFoulTimes  
}

// let homeFoulTimeBtn = document.getElementById("home-foul-btn")
let guestFoulEl = document.getElementById("guest-foul-el")
let guestFoulTimes = 0 

function guestFoul () {
   guestFoulTimes += 1 
   guestFoulEl.textContent = guestFoulTimes  
}

// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0 

function increaseHomeScoreOne() {
   homeScore += 1 
   homeStoreEl.textContent = homeScore  
}

// let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeStoreEl2 = document.getElementById("home-score")
let homeScore2 = 0 

function increaseHomeScoreTwo() {
   homeScore += 2 
   homeStoreEl.textContent = homeScore  
}

// let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeStoreEl3 = document.getElementById("home-score")
let homeScore3 = 0 

function increaseHomeScoreThree() {
   homeScore += 3
   homeStoreEl.textContent = homeScore  
}

// let periodBoard = document.getElementById("period-btn")
let periodEl = document.getElementById("period-count")
let periodCount = 0 

function increasePeriodBtn() {
   periodCount += 1 
   periodEl.textContent = periodCount  
}
 

// let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

// let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestStoreEl2 = document.getElementById("guest-score")
let guestScore2 = 0 

function increaseGuestScoreTwo() {
   guestScore += 2 
   guestStoreEl.textContent = guestScore  
}

// let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestStoreEl3 = document.getElementById("guest-score")
let guestScore3 = 0 

function increaseGuestScoreThree() {
   guestScore += 3
   guestStoreEl.textContent = guestScore  
}
