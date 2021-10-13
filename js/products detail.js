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

var MainImg = document.getElementById('MainImg');
var SmallImg = document.getElementsByClassName('small-image');

SmallImg[0].onclick = function () {
    MainImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function () {
    MainImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function () {
    MainImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function () {
    MainImg.src = SmallImg[3].src;
}