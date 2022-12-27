let scoreContainer = document.querySelector('.score')
let rateNumber = document.querySelector('.score-number')
let submit = document.querySelector('#submit-btn')
let cardThankyou = document.querySelector('.card-thankyou')

scoreContainer.addEventListener('click', evento =>{
    let numberSelected = evento.target.innerText
    rateNumber.innerText = numberSelected
    if(numberSelected > 0 || numberSelected <=5){
        submit.addEventListener('click', ()=>{
            card.style.display = 'none'
            cardThankyou.style.display = 'flex'
        })
    }
})
