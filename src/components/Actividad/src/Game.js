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
        this.level1 = null;

        this.screen = 7;
        this.levelActivated = null;
        this.arrayBloques = [];
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
        this.level1 = app.loadImage('/game/level1.png');

        this.levelActivated = false;
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
            case 7:
                this.levelActivated=true;
                this.blocks(app);
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
                break;
            case 7:
                app.image(this.level1, 0, 0);
                break;
        }
    }

    blocks(app){

        if(this.levelActivated){

            if (app.mouseX > 852 && app.mouseX < 1006 && app.mouseY > 211 && app.mouseY < 245) {
                console.log("DERECHA");
                let codeRight=1;
                this.arrayBloques.push(codeRight);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 852 && app.mouseX < 1006 && app.mouseY > 278 && app.mouseY < 312) {
                console.log("IZQUIERDA");
                let codeLeft=2;
                this.arrayBloques.push(codeLeft);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 852 && app.mouseX < 1006 && app.mouseY > 345 && app.mouseY < 379) {
                console.log("ARRIBA");
                let codeUp=3;
                this.arrayBloques.push(codeUp);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 852 && app.mouseX < 1006 && app.mouseY > 412 && app.mouseY < 446) {
                console.log("ABAJO");
                let codeDown=4;
                this.arrayBloques.push(codeDown);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1025 && app.mouseX < 1104 && app.mouseY > 211 && app.mouseY < 245) {
                console.log("UNA VEZ")
                let codeOne=5;
                this.arrayBloques.push(codeOne);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1025 && app.mouseX < 1104 && app.mouseY > 278 && app.mouseY < 312) {
                console.log("DOS VECES");
                let codeTwo=6;
                this.arrayBloques.push(codeTwo);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1025 && app.mouseX < 1104 && app.mouseY > 345 && app.mouseY < 379) {
                console.log("TRES VECES");
                let codeThree=7;
                this.arrayBloques.push(codeThree);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1121 && app.mouseX < 1200 && app.mouseY > 211 && app.mouseY < 245) {
                console.log("CUATRO VECES");
                let codeFour=8;
                this.arrayBloques.push(codeFour);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1121 && app.mouseX < 1200 && app.mouseY > 278 && app.mouseY < 312) {
                console.log("CINCO VECES");
                let codeFive=9;
                this.arrayBloques.push(codeFive);
                console.log("arrayBloques= " + this.arrayBloques);
            }
            
            if (app.mouseX > 1121 && app.mouseX < 1200 && app.mouseY > 345 && app.mouseY < 379) {
                console.log("SEIS VECES")
                let codeSix=10;
                this.arrayBloques.push(codeSix);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1022 && app.mouseX < 1106 && app.mouseY > 412 && app.mouseY < 446) {
                console.log("CAPTURAR");
                let codeCapture=11;
                this.arrayBloques.push(codeCapture);
                console.log("arrayBloques= " + this.arrayBloques);
            }
    
            if (app.mouseX > 1115 && app.mouseX < 1199 && app.mouseY > 412 && app.mouseY < 446) {
                console.log("LIBERAR");
                let codeFree=12;
                this.arrayBloques.push(codeFree);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (app.mouseX > 898 && app.mouseX < 1052 && app.mouseY > 655 && app.mouseY < 704) {
                console.log("LIMPIAR");
                this.arrayBloques=[];
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (app.mouseX > 730 && app.mouseX < 884 && app.mouseY > 655 && app.mouseY < 704) {
                console.log("DESHACER");
                this.arrayBloques.pop();
                console.log("arrayBloques= " + this.arrayBloques);
            }

        }
        
    }
}

export default Game;