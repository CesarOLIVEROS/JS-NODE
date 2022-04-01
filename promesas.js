// promesas siempre se crea el objeto tipo promesa y se retorna
// al igual se le pasan la funcion y los parametros de resuelto o rechazado.

function saludarPersona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(nombre === 'Marin '){

                console.log('Hola ' + nombre)
                resolve(nombre)
            }else{
                reject('Hey que hace usando mi metodo');
            }
            
        }, 1000);
    })
}

function conversarPersona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Conversamos...' + nombre);
            resolve(nombre);
        }, 2000)
    })
}

// cada funcion tendra su tiempo de espera pero se llamara en el orden que se defina cuando hagamos la 
// llamada a la funcion principal.
function despedidaPersona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Chao ' + nombre);
            resolve();
            
        }, 2000)
    })
}

console.log('inicio proceso');
// se llama la funcion y se le pasa los parametros para luego decirle 
// entonces o .then(),la cual devolvera el resolve o el reject
saludarPersona('Marin ')
// aca se pueden llamar las funciones las veces que sean necesarias, 
// al igual si la funcion requiere de mas de un parametro se debera concordar con la funcion inicial
// para hacer un correcto llamado.
    .then(conversarPersona)
    .then(despedidaPersona)
    .then(function (String){
        console.log('Terminando proceso');
    })
    // podemos usar un catch devido a que las promesas tienen su propio manejo de errores
    // y se le pasa una funcion con el error cometido.
    .catch(function(error){
        console.log('Ocurrio un error');
        console.log(error);
    })