function encriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = Tomar letras mayusculas y minusculas 
    // m = Tomar multiples lineas
    // g = Tomar toda la linea o la oracion

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado

    //Momento de dar encriptar, mostrar boton Copiar
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    
    var frase = document.getElementById("textoDesencriptado").value.toLowerCase();

    // i = Tomar letras mayusculas y minusculas 
    // m = Tomar multiples lineas
    // g = Tomar toda la linea o la oracion

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado

}

function copiar(){
    
    //Guarda lo que esta dentro del textarea
    var contenido = document.querySelector("#textoDesencriptado");
    
    //Selecciona contenido
    contenido.select();
    
    //se copia el contenido
    document.execCommand("copy")


}