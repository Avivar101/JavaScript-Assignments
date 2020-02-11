const navSlide = () => {
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('#menu-bar');

    menu.addEventListener('click', function() {
        nav.classList.toggle('menu-bar-active');
    });

}

navSlide();