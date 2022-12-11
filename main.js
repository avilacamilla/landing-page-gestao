var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',()=>{

    menu.classList.toggle('active');

    if (iconMenu.getAttribute("src") == 'assets/images/menu.png') {
        iconMenu.setAttribute("src","assets/images/close.png");
    }else{
        iconMenu.setAttribute("src","assets/images/menu.png"); 
    }

    
})