// navbar
const sidebarNavigationEl = document.getElementById("sidebar_nav_cont_id")
const sidebarOpenNavigationEl = document.getElementById("open_nav_sidebar")
const sidebarCloseNavigationEl = document.getElementById("close_navbar")

sidebarOpenNavigationEl.addEventListener("click",() =>{
    sidebarNavigationEl.classList.toggle("sidebar_show")
})
sidebarCloseNavigationEl.addEventListener("click",() =>{
    sidebarNavigationEl.classList.toggle("sidebar_show")
})

// image slide

let slideBtnLeft = document.getElementById("slide_left")
let slideBtnRight = document.getElementById("slide_right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach((element) => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

// Auto Slide
function renderAutoSlide(){
    if (startSlider >= -endSlider + 100){
        handleRightBtn()
    }
    else{
        startSlider = 100;
    }
}
setInterval(renderAutoSlide,4000);

// trending deals
let leftbtn = document.getElementById("trnd_btn_left");
let rightbtn = document.getElementById("trnd_btn_right")

rightbtn.addEventListener("click", function(event) {
    const move = document.querySelector('.trnd_prod_list');
    move.scrollLeft += 900;  
})
leftbtn.addEventListener("click", function(event) {
    const move = document.querySelector('.trnd_prod_list');
    move.scrollLeft -= 900;  
})

// offer sec
let offerLeftBtn = document.getElementById("offer_btn_left")
let offerRightBtn = document.getElementById("offer_btn_right")

offerLeftBtn.addEventListener("click", function(event){
    const offrEL = document.querySelector('.offr_img_cont')
    offrEL.scrollLeft -= 1200
})

offerRightBtn.addEventListener("click",function(event){
    const offrEL = document.querySelector('.offr_img_cont')
    offrEL.scrollLeft += 1200
})

// offer sec
let offerLeftBtn2 = document.getElementById("offer_btn_left2")
let offerRightBtn2 = document.getElementById("offer_btn_right2")

offerLeftBtn2.addEventListener("click", function(event){
    const offr2EL = document.querySelector('.offr_img_cont2')
    offr2EL.scrollLeft -= 1200
})

offerRightBtn2.addEventListener("click",function(event){
    const offr2EL = document.querySelector('.offr_img_cont2')
    offr2EL.scrollLeft += 1200
})

// back to top
const backToTop = document.querySelector(".foot-panel1")
backToTop.addEventListener("click", ()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

