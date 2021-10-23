class Game {


    constructor(actividad) {
        this.actividad = actividad;
        this.mainScreen = null;

        this.tutorial1 = null;
        this.tutorial2 = null;
        this.tutorial3 = null;
        this.tutorial4 = null;
        this.tutorial5 = null;
        this.tutorial6 = null;
        this.screen = null;

        this.screen = 0;

    }


    setup(app) {

        this.title = "Pokemón"
        app.createCanvas(1280, 720);
        app.background(0);
        this.mainScreen = app.loadImage('/game/mainScreen.png');
        this.tutorial1 = app.loadImage('/game/tutorial1.png');
        this.tutorial2 = app.loadImage('/game/tutorial2.png');
        this.tutorial3 = app.loadImage('/game/tutorial3.png');
        this.tutorial4 = app.loadImage('/game/tutorial4.png');
        this.tutorial5 = app.loadImage('/game/tutorial5.png');
        this.tutorial6 = app.loadImage('/game/tutorial6.png');

    }

    draw(app) {
        this.drawScreen(app);
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


    drawScreen(app) {

        switch (this.screen) {
            case 0:
                app.image(this.mainScreen, 0, 0);
                break;
            case 1:
                app.image(this.tutorial1, 0, 0);
                break;
            case 2:
                app.image(this.tutorial2, 0, 0);
                break;
            case 3:
                app.image(this.tutorial3, 0, 0);
                break;
            case 4:
                app.image(this.tutorial4, 0, 0);
                break;
            case 5:
                app.image(this.tutorial5, 0, 0);
                break;
            case 6:
                app.image(this.tutorial6, 0, 0);
        }
    }
}

export default Game;