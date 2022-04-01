
// definimos la funcion que tendra sus parametros y la funcion de tipo Callback
// dentro del cuerpo de esta funcion hacemos un llamado a la funcion setTimeout que se ejecutara 
// Y dentro de este se hace la llamada a la funcion callback
function saludarPersona(nombre, unCallBack){
    setTimeout(function(){
        console.log('Hola a todos ' + nombre);
        unCallBack();
    // paramentros de setTimeout (funcion a ejecutar), tiempo de espera para
    // mostrar resultado  
    }, 2000);


}

function despedircePersona(nombre, callback2){
    setTimeout(function(){
        console.log('adios' + nombre);

    }, 3000)
};

console.log('Inicio Proceso');
// se llama la funcion que se denomina arriba como callback 
// luego pasamos la funcion setTimeout para ejecutarla.
saludarPersona('Mariana', function(){
    console.log('Finalizacion del proceso SetTimeout');
});

// llamada a la funcion
despedircePersona('Mariana', function(){

});

function saludarPersona(nombre, unCallBack){
    setTimeout(function(){
        console.log('Hola a todos ' + nombre);
        unCallBack(nombre); // aca pasamos el nombre para no llamarlo en cada funcion.
    // paramentros de setTimeout (funcion a ejecutar), tiempo de espera para
    // mostrar resultado  
    }, 2000);


}

function despedircePersona(nombre, callback2){
    setTimeout(function(){
        console.log('adios' + nombre);
        callback2();
    }, 3000)
};

function conversarPersona(callback3){
    setTimeout(function(){
        console.log('conversando');
        callback3();
    }, 4000);
}

console.log('Inicio Proceso');
// se llama la funcion que se denomina arriba como callback 
// luego pasamos la funcion setTimeout para ejecutarla.
saludarPersona('Mariana', function(nombre){//pasamos nombre por que en la primer llamada se le paso el parametro de nombre.
    conversarPersona( function(){
        console.log('Hablando de politica');
        despedircePersona(nombre, function(){
            console.log('Termino proceso')
        });
        
    })
});



