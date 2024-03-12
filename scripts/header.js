


window.addEventListener(("scroll"),function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
})



let sideBar = document.querySelector(".side-bar");
let navBtn = document.querySelector(".side-bar-btn");
let cardGroup = document.querySelector(".card-group");



navBtn.addEventListener("click",function(){
    if(sideBar.classList.contains("side-active")){
        sideBar.classList.remove("side-active");
        navBtn.classList.remove("side-active-btn");
        cardGroup.classList.remove("side-active-card-group");

    }else{
        sideBar.classList.add("side-active");
        navBtn.classList.add("side-active-btn");
        cardGroup.classList.add("side-active-card-group");


    }
});