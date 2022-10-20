let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
    download.classList.remove('active');
}

let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active')
}

let download = document.querySelector('.notification2');

document.querySelector('#download-icon').onclick = () =>{
    download.classList.toggle('active')
}

// swiper
var swiper = new Swiper (".trending-content",{
    slidesPerView: 1,
    slidesBetween: 10,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween:10,
        },
        768:{
            slidesPerView:3,
            spaceBetween:15,
        },
        1068:{
            slidesPerView:4,
            spaceBetween:15,
        },
    },
}) 