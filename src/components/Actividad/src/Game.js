class Game {

    constructor(actividad) {
        this.actividad = actividad;
        console.log("CLASE GAME CARGADA");

    }

    setup(app) {
        app.createCanvas(1280, 720);
    }

    draw(app) {
        app.background(0);
        app.text("ESTE ES EL JUEGO", 100, 100)
        app.rect(100, 200, 100, 100)
        app.text("xdddd", 100, 100)
            //Hola hijueputa
    }

    mousePressed() {
        this.actividad.goName("JUEGO")
    }
}

export default Game;