class Proyectil {
    velocidadInicial = 0;
    angulo = 0;

    constructor(VelocidadInicial, Angulo) {
            // this.velocidadInicial = 0;
            console.log('ya se instancio la clase');
            this.velocidadInicial = VelocidadInicial;
            this.angulo = Angulo;
        }
        /* =================================
             Metodos de objetos
        ================================= */
    calcularVelocidadX(t) {
        let velocidadX = 0;
        velocidadX = (this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180))) * t;
        return velocidadX;
    }
    calcularVelocidadY(t) {
        let velocidadY = 0;
        velocidadY = (this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180)));
        velocidadY = velocidadY * t - 0.5 * 9.8 * Math.pow(t, 2);
        return velocidadY;
    }
    crearSpan(posicionX, posicionY) {
        let spanCreado = document.createElement('span');
        spanCreado.style.left = `${posicionX}%`;
        spanCreado.style.bottom = `${posicionY}%`;
        document.getElementById('contenedor').appendChild(spanCreado);
    }
}