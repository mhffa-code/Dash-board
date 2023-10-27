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

// email handling (profile section)
const email = document.querySelector(".email");
overflowHidden(email, 14);
// overfliw function 
function overflowHidden(selector, count)
{
    

    let Chars = Array.from(selector.textContent);

    if (window.innerWidth > 991 || window.innerWidth < 667)
    {
        Chars.length = count;

        selector.textContent = Chars.join("") + "...";
    }
    else if (window.innerWidth > 991 && window.innerWidth < 667)
    {
        selector.textContent = Chars.join("");
    }
}

// mode
let pageMoodIcons = document.querySelectorAll(".mood");

pageMoodIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
    
        let logo = document.querySelector("header .left > img");
    
        if (icon.classList.contains("fa-moon"))
        {
            icon.className = "fa-solid fa-sun";
            logo.src = "open_sesame_night.png";
        }
        else
        {
            icon.className = "fa-solid fa-moon"; 
            logo.src = "IMG_20231009_172543_034.jpg";
        }      
        
        document.body.classList.toggle("dark-theme"); 
        
    });
    
});

// hide with zero balance
const balances = Array.from(document.querySelectorAll(".acc-balances .balance .num"));
const hideBox = document.querySelector(".hide-input input");

hideBox.addEventListener("click", () => {

    if (hideBox.checked)
    {
        balances.forEach((balance) => {
            
          let sequence =  Array.from(balance.textContent);
          let flag = false;
          for (let i = 0; i < sequence.length; i++)
          { 
                if (sequence[i] != 0)
                {
                    if (sequence[i] == '.')
                        continue;
                    flag = true;
                    break;
                }
          }
          if (flag == false)
          {
            balance.parentElement.parentElement.parentElement.style.display = "none";
          }
          else
          {
              flag = false;
          }
        });
    }else {
        balances.forEach((balance) => {
            balance.parentElement.parentElement.parentElement.style.display = "flex";
        });
    }

});