const menu = document.querySelector('.menu-options')
menu.querySelector('.menu').addEventListener('click',function(){
    const menuBg = document.querySelector('.menu-options')
    const hidden = menu.querySelector('.menu-warp').classList.toggle('hidden')
    if (menuBg.classList.contains('menu-bg')){
        menuBg.classList.remove('menu-bg')
    }else{
        menuBg.classList.add('menu-bg')
    }
    const icon = menu.querySelector('.menu')
    if (hidden){
        icon.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
        icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
})