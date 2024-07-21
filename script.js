// // script.js
// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     if (navLinks.classList.contains('active')) {
//         navLinks.style.display = 'block';
//     } else {
//         navLinks.style.display = 'none';
//     }
// });


function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuButton = document.getElementById("menuButton");
    var menuIcon = document.getElementById("menuIcon");
    
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("block");
      menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
    } else {
      menu.classList.remove("block");
      menu.classList.add("hidden");
      menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
  }