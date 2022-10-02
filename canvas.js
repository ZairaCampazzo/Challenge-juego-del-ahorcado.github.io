
function dibujarTablero(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "lightgreen";
    tablero.strokeStyle = "#0A3871";
    tablero.fillRect(150,50,1700,750);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "black";
    tablero.strokeStyle = "#0A3871";

    let anchura = 450/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(450 + (anchura*i), 640)
        tablero.lineTo(500 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "black";

    let anchura = 455/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],455+(anchura*index),620);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, erroresLeft){
    tablero.font = "bold 35px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "red";
    tablero.fillText(letra, 300+(35*(10-erroresLeft)),710,35);
}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "black"

    if(puntaje===8){//poste lateral izquierdo
        tablero.moveTo(700,500)
        tablero.lineTo(700,100)
    }
    if(puntaje===7){//poste lateral derecho
        tablero.moveTo(850,100)
        tablero.lineTo(700,100)
    }
    if(puntaje===6){//cuerda
        tablero.moveTo(850,100)
        tablero.lineTo(850,171)
    }
    if(puntaje===5){// cara
        tablero.moveTo(900,230)
        tablero.arc(850,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//cuerpo
        tablero.moveTo(850,389)
        tablero.lineTo(850,289)
    }
    if(puntaje===3){//pierna izquierda
        tablero.moveTo(850,389)
        tablero.lineTo(800,450)
    }
    if(puntaje===2){//pierna derecha
        tablero.moveTo(850,389)
        tablero.lineTo(890,450)
    }
    if(puntaje===1){//brazo izquierdo
        tablero.moveTo(850,330)
        tablero.lineTo(800,389)
    }
    if(puntaje===0){//brazo derecho
        tablero.moveTo(850,330)
        tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
  }

  function perdiste() {
    tablero.font = "bold 42px Inter";
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("¡Perdiste, fin del juego!",200,320)
    setTimeout(recargar , 3500)
  }

  function ganaste() {
    tablero.font = "italic 42px Inter";
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="blue"
    tablero.fillText("¡Ganaste,",250,320)
    tablero.fillText("felicidades!",230,360)
    setTimeout(recargar , 3500)
  }   

  function recargar(){
    location.reload(); 
  }