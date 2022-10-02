
var palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS"];
var tablero = document.getElementById("horca").getContext("2d");
var palabraSecreta = "";
var letras = [];
var errores = 8;
let letrasIncorrectas = [];
let numErrores = 8;
let letraElegida = [];

var botonNuevoJuego = document.getElementById("boton-nuevo-juego");
var divAgregarPalabra = document.getElementById("agregar-palabra");
var botonCancelar = document.getElementById("boton-cancelar");

document.getElementById("agregar-palabra").style.display = "none";
document.getElementById("boton-cancelar").style.display = "none";
document.getElementById("boton-guardar").style.display = "none";
document.getElementById("boton-nuevo-juego").style.display = "none";
document.getElementById("boton-salir").style.display = "none";



document.getElementById("iniciarJuego").onclick = () => {
    iniciarJuego();
}

document.getElementById("boton-guardar").onclick = () => {
    guardarpalabra();
}

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta);
    return palabra
}

function comprobarLetra(key){
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return false
    }else{
        console.log(key);
        return true
    }
}

function anadirLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function anadirLetraIncorrecta(letra){
    if (palabraSecreta.indexOf(letra) <= 90)
    errores -= 1;
    console.log(errores);
}

function verificarFinJuego(letra) {
   if(letraElegida.length < palabraSecreta.length) { 
      letrasIncorrectas.push(letra);
      if (letrasIncorrectas.length > numErrores) {
        perdiste()
      }
      else if(letraElegida.length < palabraSecreta.length) {
        anadirLetraIncorrecta(letra);
        escribirLetraIncorrecta(letra, errores);
      }
    }
} 

function verificarGanador(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
    ganaste()
    }
}

function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }
  
function ensenarPantallaDeAgregarPalabra() {
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementById("boton-cancelar").style.display = "block";
    document.getElementById("boton-guardar").style.display = "block";
    document.getElementById("boton-nuevo-juego").style.display = "none";
    document.getElementById("boton-salir").style.display = "none";
}

function guardarPalabra() {
    let nuevaPalabra = document.getElementById("input-nueva-palabra").value;
    
    if(nuevaPalabra !== ""){
      palabras.push(nuevaPalabra.toUpperCase());
      alert("La palabra fue guardada");
      document.getElementById("nueva-palabra");
      iniciarJuego();
    }else{
      alert("Ninguna palabra ha sido digitada");
    }
}

function iniciarJuego(){
    
    escojerPalabraSecreta();
    dibujarTablero();
    dibujarLinea();
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";
    document.getElementById("boton-nuevo-juego").style.display = "block";
    document.getElementById("boton-salir").style.display = "block";


    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        if (letrasIncorrectas.length <= numErrores) {
            if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
                for(let i = 0; i < palabraSecreta.length; i++){
                    if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                    verificarGanador(letra);
                    }
                }
            }else{
                if (!comprobarLetra(e.key) && !verificarGanador(letra)) return
                dibujarAhorcado(errores)
                verificarFinJuego(letra)
            }
        }
    else {
        alert("has alcanzado el límite de letras incorrectas");
        }
    }
}
