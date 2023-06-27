// Función para codificar los datos y generar las gráficas
function codificar() {
  // Obtener la cadena de bits ingresada
  var bitString = document.getElementById("bitString").value;

  // Verificar que la cadena de bits tenga 11 caracteres
  if (bitString.length !== 11) {
    alert("La cadena de bits debe tener 11 caracteres.");
    return;
  }

  // Limpiar las gráficas anteriores
  clearCanvas("nrzlCanvas");
  clearCanvas("nrziCanvas");
  clearCanvas("bipolarAmiCanvas");
  clearCanvas("pseudoternarioCanvas");
  clearCanvas("manchesterCanvas");
  clearCanvas("manchesterDifferentialCanvas");

  // Codificar los datos y dibujar las gráficas correspondientes
  nrzlSignal(bitString);
  nrziSignal(bitString);
  bipolarAmiSignal(bitString);
  pseudoternarioSignal(bitString);
  manchesterSignal(bitString);
  manchesterDifferentialSignal(bitString);
}

// Función para limpiar un lienzo
function clearCanvas(canvasId) {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function nrzlSignal(bitString) {
    let canvas = document.getElementById("nrzlCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 50;
    // Dibujar la señal NRZ-L
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 0) {
            ctx.beginPath(); 
            ctx.moveTo(x, y);
            y = height * 0.10; 
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y = height * 0.9;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

function nrziSignal(bitString) {
    let canvas = document.getElementById("nrziCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 90;
    // Dibujar la señal
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y == height * 0.9 ? y = height * 0.1 : y = height * 0.9; 
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

function bipolarAmiSignal(bitString) {
    let canvas = document.getElementById("bipolarAmiCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 90;
    let lastSignal = true;
    // Dibujar la señal
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y= height * 0.5;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            lastSignal ? y = height * 0.1 : y = height * 0.9 ; 
            lastSignal ? lastSignal = false : lastSignal = true;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

function pseudoternarioSignal(bitString) {
    let canvas = document.getElementById("pseudoternarioCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 90;
    let lastSignal = true;
    // Dibujar la señal
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y= height * 0.5;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        if(bit === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            lastSignal ? y = height * 0.1 : y = height * 0.9 ; 
            lastSignal ? lastSignal = false : lastSignal = true;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

function manchesterSignal(bitString) {
    let canvas = document.getElementById("manchesterCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 90;
    // Dibujar la señal
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y= height * 0.1;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            y = height * 0.9; 
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y= height * 0.9;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            y = height * 0.1; 
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

function manchesterDifferentialSignal(bitString) {
    let canvas = document.getElementById("manchesterDifferentialCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    // Calcular el ancho de cada bit
    let bitWidth = width / bitString.length;

    // Dibujar la línea de referencia horizontal
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    let bitField = 0;
    for (let i = 0; i < bitString.length; i++) {
        ctx.beginPath();
        ctx.moveTo(bitField, 0);
        ctx.lineTo(bitField, height);
        ctx.strokeStyle = "gray";
        ctx.stroke();
        bitField += bitWidth;
    }
    
    let x = 0;
    let y = 90;
    // Dibujar la señal
    for (let i = 0; i < bitString.length; i++) {
        let bit = parseInt(bitString[i]);
        
        if(bit === 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            y == height * 0.9 ? y = height * 0.1 : y = height * 0.9;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "red";
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            y == height * 0.9 ? y = height * 0.1 : y = height * 0.9;
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        if(bit === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.strokeStyle = "red";
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            y == height * 0.9 ? y = height * 0.1 : y = height * 0.9; 
            ctx.lineTo(x + bitWidth / 2, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x + bitWidth / 2, y);
            ctx.lineTo(x + bitWidth, y);
            ctx.stroke();
        }
        
        x += bitWidth;
        
    }
}

btn_codificar = document.getElementById('codificar');

btn_codificar.addEventListener('click', function(e) {
    e.preventDefault();
    codificar();
});