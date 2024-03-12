


window.addEventListener(("scroll"),function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
})



let sideBar = document.querySelector(".side-bar");
let navBtn = document.querySelector(".side-bar-btn");


navBtn.addEventListener("click",function(){
    if(sideBar.classList.contains("side-active")){
        sideBar.classList.remove("side-active");
        navBtn.classList.remove("side-active-btn");
    }else{
        sideBar.classList.add("side-active");
        navBtn.classList.add("side-active-btn");

    }
});