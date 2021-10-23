import Screen from "./Screen";

class Game {


    constructor(actividad) {
        this.actividad = actividad;
    }


    setup(app) {
        let screen = new Screen(this);
        this.title = "Pokemon"
        app.createCanvas(1280, 720);

        app.background(0);
    }

    draw(app) {
        this.screen.drawScreen(app);

    }

    mousePressed() {}
}

export default Game;