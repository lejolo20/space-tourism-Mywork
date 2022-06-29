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




const tabList = document.querySelector(`[role="tablist"]`);
const tabs = document.querySelectorAll(`[role="tab"]`);

tabList.addEventListener(`keydown`, changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener(`click`,changeTabPanel);
})



let tabFocus=0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1

    if (e.keyCode===keydownLeft || e.keyCode===keydownRight){
        tabs[tabFocus].setAttribute("tabindex",-1);
    
        // if the right key is pushed, move to the next tab on the right
        if  (e.keyCode===keydownRight){
            tabFocus++
            if (tabFocus >= tabs.length){
                tabFocus=0;
            }
        }
        // if the left key is pushed, move to the next tab on the left
        else if (e.keyCode===keydownLeft){
            tabFocus--
            if (tabFocus < 0){
                tabFocus=tabs.length-1;
            }
        }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();

    console.log(tabFocus)
}
    }


   

function changeTabPanel(e) {

    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")

    const tabContainer = targetTab.parentNode; 
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector(`[aria-selected="true"]`).setAttribute("aria-selected",false);

    targetTab.setAttribute("aria-selected",true);

    hideContent(mainContainer, `[role="tabpanel"]`);
    showContent(mainContainer,[`#${targetPanel}`]);

 /*    mainContainer
        .querySelectorAll(`[role="tabpanel"]`)
            .forEach((panel) => 
                panel.setAttribute("hidden", true) ); */

/*     mainContainer.querySelector([`#${targetPanel}`]).removeAttribute(`hidden`);
 */

    hideContent(mainContainer, `picture`);
    showContent(mainContainer,[`#${targetImage}`]);

   /*  mainContainer
    .querySelectorAll(`picture`)
        .forEach((pic) => 
            pic.setAttribute("hidden", true) ); */

/*     mainContainer.querySelector([`#${targetImage}`]).removeAttribute(`hidden`);
 */
}



function hideContent(parent, content) {
    parent
    .querySelectorAll(content)
        .forEach((item) => 
            item.setAttribute("hidden", true) );

            console.log(content)
}




function showContent(parent, content) {
    parent.querySelector(content).removeAttribute("hidden")
}

/* Ejercicio 1 Eloquent JS */


/* let input = prompt("indique la cantidad de # que requiere");*/

 

/* triangulo = input=> {
let hash="";
for (let i=1; i<=input; i++){
    hash +="#";
    console.log(hash);
    }
} */


/* fizz buzz */

/* let number = prompt("introduzca un numero")

for (let i=1; i<=number;i++){

    if ((i%3 == 0) && (i%5==0)){
        console.log(i+" fizzbuzz")
    }

    else if (i%3 == 0){
        console.log(i + " fizz")
    }
    else if (i%5==0){
        console.log(i+" buzz")
    }
    
    else {
        console.log(i)
    }
    
    } */

    /* ejercicio 3 Eloquent JS */

    let numberColumna = []

    function tablero(numberFila, numberColumna){

        for(let i=0; i<numberFila;i++){
            if(i % 2 == 0){
                console.log(" # # # #")
                }
                else {
                    console.log("# # # # ")
                }

            numberColumna = i.length()

           let arrayColumna = numberColumna.push()

    
        }
    }

    