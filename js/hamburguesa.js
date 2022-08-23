const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '/project-assets/img-hamburguesa/open-menu2.png'){
        e.target.setAttribute('src','/project-assets/img-hamburguesa/open-menu.png');
        var intro = document.getElementById('burguer');
intro.style.backgroundColor = '#ffffff';
    }else{
        e.target.setAttribute('src','/project-assets/img-hamburguesa/open-menu2.png');
        var intro = document.getElementById('burguer');
intro.style.backgroundColor = '#ECF7FF';
    }
});


  