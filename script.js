const hamBurger = document.querySelector(".ham-img");
const navList = document.querySelector(".nav-list");
const headerH1 = document.querySelector(".header-h1");

let open = true;
let width = window.screen.width;

function clickHandle() {
  if (open) {
    navList.style.display = "grid";
    headerH1.style.display = "none";

    window.addEventListener("resize", () => {
      width = window.screen.width;
      if (width < 541) {
        navList.style.display = "grid";
        headerH1.style.display = "none";
      } else {
        navList.style.display = "grid";
        headerH1.style.display = "grid";
      }
    });
  } else {
    navList.style.display = "none";
    headerH1.style.display = "grid";

    window.addEventListener("resize", () => {
      width = window.screen.width;
      if (width < 541) {
        navList.style.display = "none";
        headerH1.style.display = "grid";
      } else {
        navList.style.display = "grid";
        headerH1.style.display = "grid";
      }
    });
  }
  open = !open;
}

hamBurger.addEventListener("click", clickHandle);
