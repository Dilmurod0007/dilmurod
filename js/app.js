var xmarka = document.querySelector('.fa-x');
var modallogin = document.querySelector('.modal_login')
var domDown = document.querySelector('.btnDown');

domDown.addEventListener('click', function(){
    modallogin.style.top = '0vh';
})

xmarka.addEventListener('click', function () {
    modallogin.style.top = '-100vh';
})
