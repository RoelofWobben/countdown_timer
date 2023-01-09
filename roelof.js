const countToDate = new Date("2023-01-21"); 

setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600) % 24 ;
  const days = Math.floor(time / (3600 * 24));   

  flip(document.querySelector("[data-days]"), days)
  flip(document.querySelector("[data-hours]"), hours)
  flip(document.querySelector("[data-minutes]"), minutes)
  flip(document.querySelector("[data-seconds]"), seconds)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const bottomHalf = flipCard.querySelector(".bottom")
  
  const startNumber = parseInt(topHalf.textContent)
  
  if (newNumber === startNumber) return

  
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  topHalf.textContent = startNumber.toString().padStart(2,"0");
  bottomHalf.textContent = startNumber.toString().padStart(2,"0");
  topFlip.textContent = startNumber.toString().padStart(2,"0");
  bottomFlip.textContent = newNumber.toString().padStart(2,"0");

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber.toString().padStart(2,"0");
  })
  
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber.toString().padStart(2,"0");
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}