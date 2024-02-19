
//* NAVBAR SECTION - LuxOrion

const navItems = document.querySelectorAll(".nav-list .nav-items");

navItems.forEach(item => {
    item.onclick = ()=>{
        navItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
    }
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