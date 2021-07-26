let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    /*menu.classList.toggle('fa-times')*/
    header.classList.toggle('active');
}

window.onscroll = () =>{
    header.classList.remove('active');
}

let back = document.querySelector('#backbutton');

back.onclick = () =>{
    window.history.back();
}