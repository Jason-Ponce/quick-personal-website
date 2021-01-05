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

// document.addEventListener("click", function(e){
//     alert(e.target.id);
// }, false);

document.addEventListener("click", function(e){
    const target = e.target;
    switch (target.dataset.popup) {
        case "open":
            modalInit(target);
            break;
        default:
            break;
    }
    switch (target.dataset.modal) {
        case "close":
            resetModal();
            break;
        default:
            break;
    }
    }, false);

function modalInit(target){
    const modal = document.querySelector(".modal");
    // modalBodyStyler();
    modal.style.display = "block";
    insertImg(target);
}


function insertImg(target){
    const modalImg = document.getElementById(target.id).src;
    const innerModal = document.querySelector(".modal-img");
    const nodeImg = document.createElement("img");
    nodeImg.setAttribute('src', modalImg);
    nodeImg.setAttribute("height", "100%");
    nodeImg.setAttribute("width", "100%");
    nodeImg.setAttribute("data-modal", "close");
    innerModal.append(nodeImg);
}

function resetModal(){
    const modal = document.querySelector(".modal");
    const innerModal = document.querySelector(".modal-img");
    modal.style.display = "none";
    while (innerModal.firstChild) {
        innerModal.removeChild(innerModal.firstChild);
    }
}