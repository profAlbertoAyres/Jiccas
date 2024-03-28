var btnMenu = document.querySelector('#btn-menu');
var menuSide = document.querySelector('.menu-lateral');
var menuTexto = document.querySelectorAll('.menu-text');
var menuResp = document.querySelector('.menu-resp');
var screenWidth = window.screen.width;


console.log("Resolução da tela: "+screenWidth);


function aparecerTexto() {
    menuTexto.forEach((item) =>
        item.classList.toggle('tm'));

}

btnMenu.addEventListener('click', function () {
    if (menuSide.classList.contains('mostar'))
        btnMenu.innerHTML='<i class="bi bi-list"></i>';
    else
        btnMenu.innerHTML = '<i class="bi bi-x-circle"></i>';
    if(screenWidth=780){

    }
    menuResp.classList.toggle('menu-resp');
    menuSide.classList.toggle('mostar');
    aparecerTexto();
});