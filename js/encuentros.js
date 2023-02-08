let openmodal=document.getElementById("ver-mas-uno");
let modal = document.getElementById("caja-uno-encuentro");
let cerrar = document.getElementById("cerrar-btn");


openmodal.addEventListener('click', ()=>{

modal.classList.add('mostrar');    


})


cerrar.addEventListener('click', ()=>{

    modal.classList.remove('mostrar');    
    })
    
    
    //MODAL DOS
let opendos=document.getElementById("ver-mas-dos");
let modaldos = document.getElementById("caja-dos-encuentro");
let cerrardos = document.getElementById("cerrar-btn-dos");


opendos.addEventListener('click', ()=>{

modaldos.classList.add('mostrar');    


})


cerrardos.addEventListener('click', ()=>{

    modaldos.classList.remove('mostrar');    
    })
    
    //MODAL TRES

let opentres=document.getElementById("ver-mas-tres");
let modaltres = document.getElementById("caja-tres-encuentro");
let cerrartres = document.getElementById("cerrar-btn-tres");


opentres.addEventListener('click', ()=>{

modaltres.classList.add('mostrar');    


})


cerrartres.addEventListener('click', ()=>{

    modaltres.classList.remove('mostrar');    
    })