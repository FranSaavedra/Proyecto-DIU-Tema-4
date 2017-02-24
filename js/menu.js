$("document").ready(function(){
    /*ocultación/mostrar elementos de los entrantes*/
    
    var entrante = $("#entrante");
    var entrante_items = $(".entr");
    entrante_items.hide();
    
    entrante.click(function(){
        entrante_items.toggle();
    });
    
    /*ocultación/mostrar elementos de los Primeros*/
    var primeros = $("#primeros");
    var primeros_items = $(".prim");
    primeros_items.hide();
    
    primeros.click(function(){
        primeros_items.toggle();
    });
    
    
    
    /*ocultación/mostrar elementos de los Segundos*/
    var segundos = $("#segundos");
    var segundo_items = $(".seg");
    segundo_items.hide();
    
    segundos.click(function(){
        segundo_items.toggle();
    });
    

    
    
    /*ocultación/mostrar elementos de los Postres*/
    var postres = $("#postres");
    var postre_items = $(".postr");
    postre_items.hide();
    
    postres.click(function(){
        postre_items.toggle();
    });

    
    /*ocultación/mostrar elementos de los Bebidas*/
    var bebidas = $("#bebidas");
    var bebidas = $("#bebidas");
    var bebidas_items = $(".bebi");
    bebidas_items.hide();
    
    bebidas.click(function(){
        bebidas_items.toggle();
    });
    
});