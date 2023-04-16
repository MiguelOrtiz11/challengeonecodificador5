//agrega valor del output como variable
var textareaOutput = document.getElementById("textareaOutput");

//no haya texto visible en el input
document.getElementById ("textareaInput").value = "";

var mensaje = "";

//obtener valores de los botones
var btnEncriptar = document.getElementById("btnEncriptar");   
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");

//toma ingreso de datos, encriptarlo y mostrar resultado en otro cuadro de texto
function encriptar (){
    var textareaInput = document.getElementById ("textareaInput").value;
    //muestra el mensaje encriptado
    mensaje = encriptarTexto(textareaInput);
    document.querySelector(".textareaOutput").value = mensaje;
    document.getElementById("outputContainer").style.visibility = "visible";
    document.getElementById("textos").style.display = "none";    
    document.querySelector(".buttonRight").style.display = "flex";
    //elimina imagen para mostrar cambio
    document.getElementById("sectionRight").style.backgroundImage = "none"; 
}


//mensaje de confirmacion de encriptado y revertir encriptacion
function desencriptar (){
    var textareaInput = document.getElementById ("textareaInput").value;
    //muestra el mensaje desencriptado
    mensaje = desencriptarTexto(textareaInput);
    document.querySelector(".textareaOutput").value = mensaje;
}

//encriptar el texto
function encriptarTexto(mensaje){
    var textoEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    return textoEncriptado;
}

//desencriptar el texto
function desencriptarTexto(mensaje){
    var textoEncriptado = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    return textoEncriptado;
}

//funcion de copiar el texto y retornarlo en el input de texto
function copiar () {
    navigator.clipboard.writeText(document.querySelector(".textareaOutput").value);
    document.querySelector(".textareaInput").value = document.querySelector(".textareaOutput").value;
}

//da funcion a las variables cuando se de click a los botones especificos
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar; 