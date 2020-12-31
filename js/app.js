document.getElementById("resume").addEventListener("click", swapViews);
document.getElementById("projects").addEventListener("click", swapViews);
document.getElementById("about").addEventListener("click", swapViews);

function swapViews(){
    const navEl = this;
    console.log(this);
    const navList = {
        home: "home",
        resume: "resume",
        projects: "projects",
        about: "about"
    }
    delete navList[navEl.id];
    hideViews(navList);
    const el = document.getElementById(navEl.id+"-section");
    el.style.display = "block";
    highlightNavEl(navEl);
}

function hideViews(navList){
    for (const nav in navList){
        const element = document.getElementById(nav+"-section");
        if (element.style.display = "block"){
            element.style.display = "none"
            removeHighlight(nav);
        }
    }
}

function highlightNavEl(el){
    el.style.borderBottom = "3px solid #C8D5B9";
    el.style.paddingBottom = "3px";
}

function removeHighlight(el){
    console.log("removeHighlight: " + el);
    const navEl = document.getElementById(el);
    navEl.style.borderBottom = "initial";
}