var btnMenu = document.querySelector('#btn-menu');
var menuSide = document.querySelector('.menu-lateral');
var menuTexto = document.querySelectorAll('.menu-text');



function aparecerTexto() {
    menuTexto.forEach((item) =>
        item.classList.toggle('tm'));

}

btnMenu.addEventListener('click', function () {
    if (menuSide.classList.contains('mostar'))
        btnMenu.innerHTML='<i class="bi bi-list"></i>';
    else
        btnMenu.innerHTML = '<i class="bi bi-x-circle"></i>';

    menuSide.classList.toggle('mostar');
    aparecerTexto();
});