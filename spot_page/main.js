// side bar handling
const sidBar = document.querySelector("aside");
const barsIcon = document.querySelector(".bars")
const closeIcon = document.querySelector(".x");

barsIcon.addEventListener("click", () => {
    sidBar.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    sidBar.classList.remove("active");
});

// profile linkes handling 
const profileLi = document.querySelector(".profile");
const mobileMenu = document.querySelector(".mobile-menu");

profileLi.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

// serach
const search = document.querySelector("header form");
const searchIcon = document.querySelector("header .search");
const SearchCloseIcon = document.querySelector("form i.right-icon");
const searchIconMobil = document.querySelector("header .search-mobile");
let temp;

if (window.innerWidth > 992)
    temp = searchIcon;
else 
    temp = searchIconMobil;

   
temp.addEventListener("click", () => {

    search.classList.add("active");
    document.querySelector("header form input").focus();
});

SearchCloseIcon.addEventListener("click", () => {

    search.classList.remove("active");

});
// lis of side bar (active loop)
const sideBarLis = Array.from(document.querySelectorAll("aside ul li"));

sideBarLis.forEach((li) => {

    li.addEventListener("click", (e) => {
        sideBarLis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });

});
// sub-menu
const sub = document.querySelector("aside .sub > a");
let sub_menu = document.querySelector("aside .sub-menu");

sub.addEventListener("click", () => {
    sub_menu.classList.toggle("active");
});

// mode
let pageMoodIcons = document.querySelectorAll(".mood");

pageMoodIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
    
        let logo = document.querySelector("header .left > img");
    
        if (icon.classList.contains("fa-moon"))
        {
            icon.className = "fa-solid fa-sun";
            logo.src = "images/open_sesame_night.png";
        }
        else
        {
            icon.className = "fa-solid fa-moon"; 
            logo.src = "images/IMG_20231009_172543_034.jpg";
        }      
        
        document.body.classList.toggle("dark-theme"); 
        
    });
    
});