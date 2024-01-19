window.addEventListener("scroll", ()=>{
    if(window.pageYOffset < 15){
        document.getElementById('text').style.display = "block"
        document.getElementById('text2').style.display = "block"
        // console.log("up")
    }
    else{
        document.getElementById('text').style.display = "none"
        document.getElementById('text2').style.display = "none"
        // console.log("down")
    }
})

let scrollToTop = ()=>{
    nav.scrollIntoView({behavior: "smooth"})
}

let backtotop = document.querySelector(".backtotop")
let nav = document.querySelector(".nav")
let menu = document.getElementById("menu")
let navid = document.getElementById("navid")
let hoverline = document.querySelector(".hoverline")
let completebody = document.querySelector(".completebody")
let Spanhoverline = document.querySelector(".Spanhoverline")

backtotop.addEventListener("click", scrollToTop)

menu.addEventListener('click',()=>{
    if(navid.style.display != "none"){
        navid.style.display = "none"
        completebody.style.display = "block"

    }
    else{
        navid.style.display = "block"
        completebody.style.display = "none"
    }

})