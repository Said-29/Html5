// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Se define una clase pelota
class Pelota{

    //Se crea el constructor de nuestro objeto pelota
    //Con sus respectivos atributos
    constructor(x, y, velX, velY, color, tam){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.tam = tam;
    }

    //Se crean las funciones que tiene la pelota, que son:
    //Aparecer en la pantalla, chocar con las paredes, y cambiar de color al colisionar

    //Funcion dibujar
    dibujar(){
        //ctx es el canvas donde se estara dibujando

        //inicia a dibujar
        ctx.beginPath();

        //color designado del relleno
        ctx.fillStyle = this.color;

        //Dibuja un circulo, en la posicion (x, y)
        ctx.arc(this.x, this.y, this.tam, 0, 2 * Math.PI);

        //rellena la pelota
        ctx.fill();
    }

    //Funcion choque
    choque(){
        //Detecta la colision con cada una de las paredes
        //y cambia la direccion en la que la pelota se mueve,
        //correspondiendo con la pared con la que choco

        if ((this.x + this.tam) >= width) {
            this.velX = -(Math.abs(this.velX));
        }

        if ((this.x - this.tam) <= 0) {
            this.velX = Math.abs(this.velX);
        }
   
        if ((this.y + this.tam) >= height) {
            this.velY = -(Math.abs(this.velY));
        }
   
        if ((this.y - this.tam) <= 0) {
            this.velY = Math.abs(this.velY);
        }
   
        this.x += this.velX;
        this.y += this.velY;
    }

    //Funcion de colision con otras pelotas
    overlap_detection(){
        for (const pelota of pelotas) {
            if (!(this === pelota)) {
               const dx = this.x - pelota.x;
               const dy = this.y - pelota.y;
               const distance = Math.sqrt(dx * dx + dy * dy);
   
                if (distance < this.tam + pelota.tam) {
                 pelota.color = this.color = randomRGB();
                }
            }
        }
    }
}

//Definimos un array de pelotas
const pelotas = [];

while(pelotas.length < 25){
    const tam = random(10,20);
    const pelota = new Pelota(
        random(0 + tam, width - tam),
        random(0 + tam, height - tam),
        random(-7,7),
        random(-7,7),
        randomRGB(),
        tam
    );

    pelotas.push(pelota);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

    for (const pelota of pelotas) {
        pelota.dibujar();
        pelota.choque();
        pelota.overlap_detection();
    }

   requestAnimationFrame(loop);
}

loop();