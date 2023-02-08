//MOUSEOVER-RETRATOS

const video= document.getElementById('video')
const boton = document.getElementById('playPause')
const img = document.getElementById('portada-re')

boton.addEventListener("mouseover", ()=>{
    video.play()
    video.classList.add('opacy')
    img.classList.add('gifpaste-opacy');
})

boton.addEventListener("mouseout", ()=>{
    video.pause()
    video.classList.remove('opacy')
    img.classList.remove('gifpaste-opacy');
})

const video2= document.getElementById('video2')
const boton2 = document.getElementById('playPauseDos')
const img2 = document.getElementById('portada-re-dos')

boton2.addEventListener("mouseover", ()=>{
    video2.play()
    video2.classList.add('opacy')
    img2.classList.add('gifpaste-opacy');
})

boton2.addEventListener("mouseout", ()=>{
    video2.pause()
    video2.classList.remove('opacy')
    img2.classList.remove('gifpaste-opacy');
})


