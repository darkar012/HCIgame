class Screen{

    constructor(app){
        this.app=app;
        this.PATH = '/game/';
        this.mainScreen = app.loadImage(this.PATH+'mainScreen.png');
    }

    drawScreen(){
        this.app.image(this.mainScreen,0,0);
    }

    button(){

    }
}