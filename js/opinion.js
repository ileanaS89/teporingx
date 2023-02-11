function myfunction(){
    for(i=0; i<catalogo.length;i++){
        $("#articleCatalogo").append(
            "<div class='views-row views-row-flex' id='producto'>"+
            "<div class='views-content' >"+
            "<h3 class='title-product'>" + catalogo[i].ItemName + "</h3>"+
            "<p id='desc' class='descripcion'>" + catalogo[i].Autor + "</p>"+ 
            "<div class='contenedor-botones-opinion'> "+       
            "<a href='"+ catalogo[i].ButtonIr +"' class ='btn-flecha'> <img src='./img/botones/flecha-verde.png' alt=''>" +"</a>" +
             "</div>"+
            "<img src='" + catalogo[i].ItemPrimaryImageUrl + "' alt='imagen de producto' class='imagen-opinion'>" + 
             "</div>" + "</div>"

        );
    }
};

var catalogo = [
    {
        "ItemName" : "Las tres muertes de Marisela Escobedo, un ejercicio de memoria",
        "ItemPrimaryImageUrl":"./img/opinion/opinion_uno.jpg",
        "Autor" : "Por Teporingx",
        "ButtonIr" : "../html/art-uno.html"
    },
    {
        "ItemName" : "¿De dónde viene lo que comemos?",
        "ItemPrimaryImageUrl": "./img/opinion/portada-de-donde-viene-lo-que-comemos.jpg",
        "Autor" : " Por Teporingx",
        "ButtonIr" : "../html/art-dos.html"
    },
    {
        "ItemName" : "¡Las calles son nuestras!",
        "ItemPrimaryImageUrl": "./img/opinion/portada-las-calles-nuestras.jpg",
        "Autor" : " Por Daniela Pedraza",
        "ButtonIr" : "../html/art-tres.html"
    },
    {
        "ItemName" : "Alimentación sustentable en el Antropoceno",
        "ItemPrimaryImageUrl": "./img/opinion/portada-alimentacion-enel-antropoceno.jpg",
        "Autor":"Por Viridiana Gonzales" ,
        "ButtonIr" : "../html/art-cuatro.html"
    }

];

myfunction();