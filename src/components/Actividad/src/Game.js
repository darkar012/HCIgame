import Screen from "./Screen";

class Game {


    constructor(actividad) {
        this.actividad = actividad;
        this.mainScreen = null;
        this.screen = new Screen(this);
    }


    setup(app) {

        this.title = "Pokemon"
        app.createCanvas(1280, 720);
        app.background(0);
        this.mainScreen = app.loadImage('/game/mainScreen.png');
        this.tutorial1 = app.loadImage()
    }

    draw(app) {
        this.screen.drawScreen(app, this.mainScreen);
        /*switch (this.screen) {
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
        }*/
    }

    mousePressed(app) {
        /*console.log("mouseX = " + app.mouseX);
        console.log("mouseY = " + app.mouseY);
        switch (this.screen) {
            case 0:
                if (app.mouseX > 521 && app.mouseX < 764 && app.mouseY > 421 && app.mouseY < 501) {
                    this.screen = 1;
                }
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
                     break;*/
    }
}


export default Game;