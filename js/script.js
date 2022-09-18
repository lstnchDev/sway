const dropBtn = document.querySelectorAll(".dropbtn")
const dropDown = document.querySelector(".dropdown-content")

const btnNext = document.querySelector(".btn_next")
const btnPrev = document.querySelector(".btn_prev")

const carouselItem = document.querySelector('.carousel-item')
const removeItem = document.querySelector('.review-item')

let marginBase = 0
let widthReview = removeItem.offsetWidth+30
let maxWidth = -carouselItem.offsetWidth


const nextSlide = ()=>{
    // marginBase += widthReview
    console.log(carouselItem.offsetWidth)

    marginBase = marginBase - widthReview <= maxWidth? maxWidth : marginBase - widthReview
    console.log(maxWidth)
    document.getElementById("gallery-item").style.marginLeft = `${marginBase}px`
    console.log(document.getElementById("gallery-item").style.marginLeft)

}   
const prevSlide = ()=>{
    marginBase = marginBase + widthReview <= 0 ? marginBase + widthReview : 0 
    // marginBase += widthReview

    document.getElementById("gallery-item").style.marginLeft = `${marginBase}px`
    console.log(document.getElementById("gallery-item").style.marginLeft)

}   

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

for (let btn of dropBtn){
    let activeBtn
    btn.addEventListener('click', (e)=>{
       
        if (btn.classList.contains("dropdown-active") === true) {
            
            btn.classList.remove("dropdown-active")
            e.target.nextElementSibling.classList.remove("show")
        }else {
            for (let button of dropBtn){
                if (button.classList.contains("dropdown-active") === true) {
                    button.classList.remove("dropdown-active")
                    button.nextElementSibling.classList.remove("show")
                }
            }
            e.target.nextElementSibling.classList.toggle("show")
            btn.classList.toggle("dropdown-active")  
    
        }
    })
}

window.onclick = (event)=>{    
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i<dropdowns.length; i++){
            let openDropdown = dropdowns[i]
            if(openDropdown.classList.contains('show')) openDropdown.classList.remove("show")
        
        }
    }
}