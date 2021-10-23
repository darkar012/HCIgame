class Screen {

    constructor(actividad) {
        this.actividad = actividad;
        this.PATH = '/game/';

        this.mainScreen = null;
    }

    drawScreen(app) {
        app.rect(200, 200, 50, 50);
        this.mainScreen = app.loadImage(this.PATH + 'mainScreen.png');
        app.image(this.mainScreen, 0, 0);
    }

    button() {
        console.log("FUNCIONA");
    }
}

export default Screen;