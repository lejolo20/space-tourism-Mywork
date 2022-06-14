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
        tabs[tabFocus].setAttribute("tabsindex",-1);
    }


    // if the right key is pushed, move to the next tab on the right
    if  (e.keyCode===keydownRight){
        tabFocus++
        if (tabFocus >= tabs.length){
            tabFocus=0;
        }
    }
     
    // if the left key is pushed, move to the next tab on the left
    if(e.keyCode===keydownLeft){
        tabFocus--
        if (tabFocus < 0){
            tabFocus=tabs.length-1;
        }
    }

    tabs[tabFocus].setAttribute("tabsindex", 0);
    tabs[tabFocus].focus();

    console.log(tabFocus)
}

function changeTabPanel(e) {

    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")

    const tabContainer = targetTab.parentNode; 
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector(`[aria-selected="true"]`).setAttribute("aria-selected",false);

    targetTab.setAttribute("aria-selected",true);



    mainContainer
        .querySelectorAll(`[role="tabpanel"]`)
            .forEach((panel) => 
                panel.setAttribute("hidden", true) );

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute(`hidden`);

    mainContainer
    .querySelectorAll(`picture`)
        .forEach((pic) => 
            pic.setAttribute("hidden", true) );

    mainContainer.querySelector([`#${targetImage}`]).removeAttribute(`hidden`);



console.log(mainContainer)
}