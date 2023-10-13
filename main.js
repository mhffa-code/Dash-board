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

if (window.innerWidth > 991)
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

// email handling (profile section)
const email = document.querySelector(".profile .email");

let emailChars = Array.from(email.textContent);

if (window.innerWidth > 991)
{
    emailChars.length = 14;

    email.textContent = emailChars.join("") + "...";
}else
{
    email.textContent = emailChars.join("");
}



