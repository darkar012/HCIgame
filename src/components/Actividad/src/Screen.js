class Screen {

    constructor(actividad) {
        this.actividad = actividad;
        this.PATH = '/game/';
        this.mainScreen = null;
    }

    drawScreen(app, mainScreen) {
        this.mainScreen = app.image('/game/mainScreen.png');
        app.image(mainScreen, 0, 0);
        app.rect(500, 200, 50, 50);


    }

    button() {
        console.log("FUNCIONA");
    }
}

export default Screen;