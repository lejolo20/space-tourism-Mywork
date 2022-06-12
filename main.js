const nav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    
        const visibility=nav.getAttribute("data-visible")
        if (visibility=="false") {
            nav.setAttribute("data-visible","true")
            navToggle.setAttribute("aria-expanded","true")
    }
        else {
            nav.setAttribute("data-visible","false")
            navToggle.setAttribute("aria-expanded","false")
    }
/*     console.log(visibility) */
})


const moon = document.getElementById("moon");
const mars = document.getElementById("mars")

mars.addEventListener("click",()=>{

            const visibilitySection=moon.getAttribute(aria-hidden)
            if (visibilitySection=="false")
                moon.setAttribute("aria-hidden","true")
            else {
                moon.setAttribute("aria-hidden","false")
            }

})