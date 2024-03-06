
//* GLOBAL VARIABLES
const primary_sections = document.querySelectorAll('.primary__sections');
const navItems = document.querySelectorAll(".nav-list .nav-items");
var observer;

//* NAVBAR SECTION - LuxOrion

const nav = document.querySelector(".navbar__section");
const navHam = document.querySelector(".navbar-hamburger > i");
const navHamWrapper = document.querySelector(".navbar-hamburger");

//? Navbar Hamburger
navHamWrapper.addEventListener("click", toggleMobileNavbar);

function toggleMobileNavbar() {
    navHamWrapper.classList.toggle("active");

    if (navHamWrapper.classList.contains("active")) {
        navHam.classList = "fa-solid fa-xmark";
    } else {
        navHam.classList = "fa-solid fa-bars";
    }
    
    navHamWrapper.classList += " fa-2xl";
}

//? Hideable Navbar Effect
let lastScrollY = window.scrollY;

function detectScrollDirection() {

    if (!navHamWrapper.classList.contains("active")) {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav-hidden");
        } else {
            nav.classList.remove("nav-hidden");
        }
    
        lastScrollY = window.scrollY;
    }

}

window.addEventListener("scroll", detectScrollDirection);

//? Navbar Active Effect
navItems.forEach(item => {
    item.onclick = ()=>{
        if (window.screen.width < 920) {
            toggleMobileNavbar();
            return;
        }
        
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
}, {threshold: 0.5})

primary_sections.forEach(section => {
    observer.observe(section);
})
