document.getElementById('menu').innerHTML='<nav id="menuBarra" class="search">'
+'<div class="menubar">'
+'<button class="menu" id="open"> MENÚ</button>'
+'</div>'
+'<div class="logobar">'
+'<a href="../index.html"><img src="./img/logoAzul.png" alt="logo-un teporingo azul " class="logoMenu" ></a>'
+'</div>'
+'</nav>'
+'</header>'

 


document.getElementById('footer').innerHTML='<div class= "container">'
+'<div class="row ">'
+'<div class="col colUno">'
+'<ul class="contentFooter">'
+'<li class="seccion">Conocenos</li>'
+'<li><a class="linkFooter" href="../html/nosotras.html">Nosotras</a></li>'
+'<li><a class="linkFooter" href="../html/encuentros.html">Encuentros</a></li>'
+'<li><a class="linkFooter" href="#">Ápoyanos</a></li>'
+'<li><a class="linkFooter" href="#">Colabora</a></li>'
+'</ul>'
+'</div>'
+'<div class="col colDos">'
+'<ul class="contentFooter">'
+'<li class="seccion">Descubre</li>'
+'<li><a class="linkFooter" href="../html/espaicosonoro.html">Espacio Sonoro</a></li>'
+'<li><a class="linkFooter" href="../html/retratos.html">Retratos</a></li>'
+'<li><a class="linkFooter" href="../html/opinion.html">Opinión</a></li>'
+'</ul>'
+'</div>'
+'<div class="col colTres ">'
+'<img src="./img/teporingas/teporingas_logo.png" alt="personaje animado de dos mujeres" class="imgTeporingas"  >'
+'</div>'
+'</div>'
+'<div>'
+'<ul class="redesSociales">'
+'<li class="redesLink"><a  href="https://www.instagram.com/teporingx/" class="linkFooter"><i class="fa fw-fa fa-instagram"></i></a></li>'
+'<li class="redesLink"><a  href="https://soundcloud.com/teporingx" class="linkFooter"><i class="fa-brands fa-souncloud"></i></a></li>'
+'<li class="redesLink"><a  href="https://www.youtube.com/@teporingx/community" class="linkFooter"><i class="fa fw-fa fa-youtube"></i></a></li>'
+'<li class="redesLink"><a  class="otherlink" href="#">Políticas de uso</a></li>'
+'<li class="redesLink"><a class="otherlink" href="#">Contactanos</a></li>'
+'</ul>'
+'</div>'
+'</div>';



let open=document.getElementById("open");
let caja = document.getElementById("caja1");
let close = document.getElementById("cerrar");


open.addEventListener('click', ()=>{

caja.classList.add('mostrar');    


})


close.addEventListener('click', ()=>{

    caja.classList.remove('mostrar');    
    })
    