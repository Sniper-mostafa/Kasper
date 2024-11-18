const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.menubar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let section = document.querySelector('.our-skills');
let progspan = document.querySelectorAll('.prog span');

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 200) {
        progspan.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}