class Screen {

    constructor(actividad) {
        this.actividad = actividad;
        this.PATH = '/game/';
        this.mainScreen = app.loadImage(this.PATH + 'mainScreen.png');
    }

    drawScreen(app) {
        app.image(this.mainScreen, 0, 0);
    }

    button() {

    }
}

export default Screen;