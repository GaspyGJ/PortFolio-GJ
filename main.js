

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


/*const botonVerMas= document.getElementById("BotonReadMore");
console.log(botonVerMas)
flag=false;
botonVerMas.addEventListener( "click", (e)=>{
    const extra= document.getElementById("extra");
    if(!flag){
        extra.style.display="block";
        flag=true;
    }
    else{
        extra.style.display="none";
        flag=false;
    }
    } )*/