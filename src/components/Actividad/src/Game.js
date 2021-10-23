class Game {

    
    constructor(actividad) {
        this.actividad = actividad;
        this.mainScreen = null;
        this.tutorial1=null;
        this.tutorial2=null;
        this.tutorial3=null;
        this.tutorial4=null;
        this.tutorial5=null;
        this.tutorial6=null;
        this.screen=null;
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


       
    }

    mousePressed(app) {
        console.log("mouseX = " + app.mouseX);
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
                break;
        }
    }

    drawScreen(){
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
                break;
        }
    }
}

export default Game;