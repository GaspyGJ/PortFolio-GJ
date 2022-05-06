//utilizamos la libreria de scrollreveal.js
window.sr=ScrollReveal();

sr.reveal('#ul-menu',{
    duration: 2500,
    origin: 'bottom',
    distance:'-100px'

})

sr.reveal('.main',{
    duration: 3000,
    origin: 'rigth',
    distance: '-300px'
})

sr.reveal('#Seccion-Habilidades',{
    duration: 3000,
    origin: 'bottom',
    distance:'-100px'
})

sr.reveal('#Seccion-Proyectos',{
    duration: 2000,
    origin: 'bottom',
    distance:'-100px'
})


sr.reveal('#Seccion-Contacto',{
    duration: 3000,
    origin: 'bottom',
    distance:'-100px'
})


//---------Termino el scroll reveal--------------

const menu= document.getElementById("menu-sandwich");
console.log(menu)
menuVisible=false;

menu.addEventListener( "click", (e)=>{
    console.log("Entre")

    const menu= document.getElementById("ul-menu");
    if(menuVisible==true){
        menu.style.height="0%";
        menuVisible=false;
    }
    else{
        menu.style.height="35%";
        menuVisible=true;
    }

} );