let menu = document.querySelector('#menu-bar');
let nav_bar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav_bar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav_bar.classList.remove('active');
}

