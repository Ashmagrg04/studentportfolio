const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const imgLink = document.querySelectorAll(".img-link");
const project = document.querySelectorAll(".project-description");
// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(function(item) {
      item.classList.add("show");
    });

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(function(item) {
      item.classList.remove("show");
    });

    showMenu = false;
  }
}

// imgLink.forEach(function(el) {
//   el.addEventListener("mouseover", function(e) {
//     e.target.querySelector(".project-description").style.visibility = "visible";
//   });
// });

// imgLink.forEach(function(el) {
//   el.addEventListener("mouseout", function(e) {
//     e.target.querySelector(".project-description").style.visibility = "hidden";
//   });
// });
