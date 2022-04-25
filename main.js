
const botonVerMas= document.getElementById("BotonReadMore");
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
    } )