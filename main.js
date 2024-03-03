
//* GLOBAL VARIABLES
const primary_sections = document.querySelectorAll('.primary__sections');
const navItems = document.querySelectorAll(".nav-list .nav-items");
var observer;

//* NAVBAR SECTION - LuxOrion

const nav = document.querySelector(".navbar__section");

//? Hideable Navbar Effect
let lastScrollY = window.scrollY;

function detectScrollDirection() {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    } else {
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;
}

window.addEventListener("scroll", detectScrollDirection);

//? Navbar Active Effect
navItems.forEach(item => {
    item.onclick = ()=>{
        navItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");

        //? Hide Navbar on Navigation
        if (item.textContent != "Beranda") {
            window.removeEventListener("scroll", detectScrollDirection);
            nav.classList.add("nav-hidden");
            lastScrollY = 0;
    
            setTimeout(() => {
                window.addEventListener("scroll", detectScrollDirection);
            }, 1000);
        }

        //? Temporarily Remove Observer
        primary_sections.forEach(section => {
            observer.unobserve(section);
        })
        
        setTimeout(() => {
            primary_sections.forEach(section => {
                observer.observe(section);
            })
        }, 1000);
        
    }
})

//? Detect Section Intersecting
observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let index = Array.from(primary_sections).indexOf(entry.target);
            navItems.forEach(item => {item.classList.remove("active")});
            navItems[index].classList.add("active");
        }
    });
}, {threshold: 0.8})

primary_sections.forEach(section => {
    observer.observe(section);
})

//* HERO SECTION - LuxOrion

const viewMoreBtn = document.querySelector(".view_more-btn");
const viewMoreBtn_img = document.querySelector(".view_more-btn img");

viewMoreBtn.onmouseover = ()=>{
    viewMoreBtn.classList.add("hovered");
    viewMoreBtn_img.setAttribute("src", "assets/sort_down_white.png");
}

viewMoreBtn.onmouseout = ()=>{
    viewMoreBtn.classList.remove("hovered");
    viewMoreBtn_img.setAttribute("src", "assets/sort_down_purple.png");
}