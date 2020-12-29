document.getElementById("resume").addEventListener("click", swapViews);
document.getElementById("projects").addEventListener("click", swapViews);
document.getElementById("about").addEventListener("click", swapViews);

function swapViews(){
    const navEl = this;
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
}

function hideViews(navList){
    for (const nav in navList){
        const element = document.getElementById(nav+"-section");
        console.log(element);
        if (element.style.display = "block"){
            element.style.display = "none"
            console.log("Running at: "+nav);
        }
    }
}