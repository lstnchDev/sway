const dropBtn = document.querySelectorAll(".dropbtn")
const dropDown = document.querySelector(".dropdown-content")

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