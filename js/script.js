const dropBtn = document.querySelectorAll(".dropbtn")
const dropDown = document.querySelector(".dropdown-content")

const btnNext = document.querySelector(".btn_next")
const btnPrev = document.querySelector(".btn_prev")

const carouselItem = document.querySelector('.carousel-item')
const reviewItem = document.querySelector('.review-item')
const galleryItem = document.querySelector('.gallery_item')

const btnBurger =  document.querySelector(".menu-btn")
const menuBurger = document.querySelector(".menu-burger")

const menuSelected = document.querySelectorAll(".menu-selected")

const btnCart = document.querySelector(".btnCart")
const modalCart = document.querySelector(".modal-cart")
const modalContent = document.querySelector(".modal-content")

const btnCloseCart = document.querySelector(".close")

const btnSearch = document.querySelector(".searchIcon")
const searchInput = document.querySelector(".search-input")
const headerMenu = document.querySelector(".header-top-menu")

let lastTarget = menuSelected[0]



btnSearch.addEventListener('click', ()=>{
    searchInput.style.display = 'block'
    headerMenu.style.gridArea = "2 / 1 / 3 / 6"
})

btnCloseCart.addEventListener('click', ()=> {
    modalCart.style.display = "none"
    modalContent.style.display = "none"
})
btnCart.addEventListener('click', ()=> {
    modalCart.style.display = "block"
    modalContent.style.display = "block"
})

modalCart.addEventListener('click', ()=> {
    modalCart.style.display = "none"
    modalContent.style.display = "none"
})
btnBurger.addEventListener('click', ()=>{
    menuBurger.classList.toggle('active')
})

for (menu of menuSelected){
    menu.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log(e.target)
        lastTarget.classList.remove("active-menu")
        e.target.classList.toggle("active-menu")
        lastTarget = e.target
    })
}

class Slider{
    
    constructor (name, galleryItem, carouselItem, reviewItem){
        this.galleryItem = galleryItem
        this.carouselItem = carouselItem
        this.reviewItem = reviewItem
        this.marginBase = 0
        this.scrollCount = 0
        this.name = name
        this.widthReview = reviewItem.offsetWidth+30
        this.maxWidth = ((galleryItem.offsetWidth/carouselItem.offsetWidth)+1)>6 ? 5 : (galleryItem.offsetWidth/carouselItem.offsetWidth)+1
    }

    nextBtn(){
        console.log(this.name)
        if (this.scrollCount<this.maxWidth) {
            this.marginBase = this.marginBase-this.widthReview
            this.scrollCount++
        }  
        galleryItem.style.marginLeft = `${this.marginBase}px`
    }
    prevBtn(){
        if (this.scrollCount>0) {
            this.marginBase = this.marginBase+this.widthReview
            this.scrollCount--
        } 
        galleryItem.style.marginLeft = `${this.marginBase}px`
    }
}
const sliderReview = new Slider(123, galleryItem, carouselItem, reviewItem)
const sliderMove = (scrollCount, maxWidth, itemScroll, booleanSide)=>{
    if (booleanSide){
        if (scrollCount<maxWidth) {
            marginBase = marginBase-widthReview
            scrollCount++
        }  
        itemScroll.style.marginLeft = `${marginBase}px`    
    }else {
        if (scrollCount>0) {
            marginBase = marginBase+widthReview
            scrollCount--
        } 
        itemScroll.style.marginLeft = `${marginBase}px`
    }
}   
btnNext.addEventListener('click', () => sliderReview.nextBtn())
btnPrev.addEventListener('click', () => sliderReview.prevBtn())


const addDropClass = (dropBtn)=>{
    for (let btn of dropBtn){
        btn.addEventListener('click', (e)=>{
           e.preventDefault()
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
}
addDropClass(dropBtn)  



window.onclick = (event)=>{  
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i<dropdowns.length; i++){
            let openDropdown = dropdowns[i]
            if(openDropdown.classList.contains('show')) openDropdown.classList.remove("show")
        
        }
    }
    if (!event.target.matches('.menu-burger') && !event.target.matches('.menu-btn') && !event.target.matches('.btnBurger')){
        menuBurger.classList.remove('active')
    }
    
}