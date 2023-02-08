
///AUDIO

const audio = document.getElementById('audio-uno')
const botonAudio = document.getElementById('audioplay')

botonAudio.addEventListener('mouseover', ()=>{
    audio.play()
})

botonAudio.addEventListener('mouseout' , ()=>{
    audio.pause()
})



const audio02 = document.getElementById('audio-dos')
const botonAudio02=document.getElementById('audioplay-dos')

botonAudio02.addEventListener('mouseover',()=>{
    audio02.play();
})

botonAudio02.addEventListener("mouseout",()=>{
    audio02.pause();
})

const audio03= document.getElementById('audio-tres')
const btnaudio03 = document.getElementById('audioplay-tres')

btnaudio03.addEventListener('mouseover', ()=>{
    audio03.play();
})

btnaudio03.addEventListener('mouseout', ()=>{
    audio03.pause();
})