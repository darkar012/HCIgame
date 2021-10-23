class Game {


    constructor(actividad) {
        this.actividad = actividad;
        this.mainScreen = null;
        this.screen = 0;
    }


    setup(app) {

        this.title = "Pokemón"
        app.createCanvas(1280, 720);
        app.background(0);
        this.mainScreen = app.loadImage('/game/mainScreen.png');
    }

    draw(app) {


        switch (this.screen) {
            case 0:
                app.image(this.mainScreen, 0, 0);
                break;
            case 1:
                app.image(this.mainScreen, 0, 0);
                break;
            case 2:
                app.image(this.mainScreen, 0, 0);
                break;
            case 3:
                app.image(this.mainScreen, 0, 0);
                break;
            case 4:
                app.image(this.mainScreen, 0, 0);
                break;
        }
    }

    mousePressed(app) {

        switch (this.screen) {
            case 0:
                if (app.mouseX > 521 && app.mouseX < 768 && app.mouseY > 421 && app.mouseY < 501) {
                    this.screen = 1;
                }
                break;
            case 1:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 2;
                }
                break;
            case 2:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 3;
                }
                break;
            case 3:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 4;
                }
                break;
            case 4:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 5;
                }
                break;
            case 5:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 6;
                }
                break;
            case 6:
                if (app.mouseX > 988 && app.mouseX < 1236 && app.mouseY > 601 && app.mouseY < 680) {
                    this.screen = 7;
                }
                break;
        }
    }
}

export default Game;