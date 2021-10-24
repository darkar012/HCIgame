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

        this.valid = false;

        this.playerX = 80;
        this.playerY = 146;
        this.side = 1;
        this.screen = 7;

        this.screen = null;
        this.level1 = null;

        this.screen = 7;
        this.levelActivated = null;
        this.arrayBloques = [];
        this.allowTimer = false;
        this.s = 0;
        this.m = 0;

        this.block1 = null;
        this.block2 = null;
        this.block3 = null;
        this.block4 = null;
        this.block5 = null;
        this.block6 = null;
        this.block7 = null;
        this.block8 = null;
        this.block9 = null;
        this.block10 = null;
        this.block11 = null;
        this.block12 = null;
    }

    setup(app) {
        this.title = "Pokemón";
        app.createCanvas(1280, 720);
        app.background(0);

        this.font = app.loadFont("/game/pixelmix.ttf");
        app.textFont(this.font, 128);
        app.textSize(20);

        this.mainScreen = app.loadImage("/game/mainScreen.png");
        this.tutorial1 = app.loadImage("/game/tutorial1.png");
        this.tutorial2 = app.loadImage("/game/tutorial2.png");
        this.tutorial3 = app.loadImage("/game/tutorial3.png");
        this.tutorial4 = app.loadImage("/game/tutorial4.png");
        this.tutorial5 = app.loadImage("/game/tutorial5.png");
        this.tutorial6 = app.loadImage("/game/tutorial6.png");
        this.level1 = app.loadImage("/game/level1.png");

        this.playerF = app.loadImage("/game/characterfoward.png");
        this.playerR = app.loadImage("/game/characterright.png");
        this.playerL = app.loadImage("/game/characterleft.png");
        this.playerB = app.loadImage("/game/characterback.png");

        this.pikachu = app.loadImage("/game/pikachu.png");
        this.charmander = app.loadImage("/game/charizard.png");
        this.bulbasaur = app.loadImage("/game/bulbasaur.png");
        this.squirtle = app.loadImage("/game/squirtle.png");

        this.life3 = app.loadImage("/game/3hearts.png");
        this.life2 = app.loadImage("/game/2hearts.png");
        this.life1 = app.loadImage("/game/1heart.png");

        this.life = 3;

        this.levelActivated = false;
        this.capture = false;
        this.capturado = false;

        this.block1 = app.loadImage("/game/derecha.png");
        this.block2 = app.loadImage("/game/izquierda.png");
        this.block3 = app.loadImage("/game/arriba.png");
        this.block4 = app.loadImage("/game/abajo.png");
        this.block5 = app.loadImage("/game/1vez.png");
        this.block6 = app.loadImage("/game/2veces.png");
        this.block7 = app.loadImage("/game/3veces.png");
        this.block8 = app.loadImage("/game/4veces.png");
        this.block9 = app.loadImage("/game/5veces.png");
        this.block10 = app.loadImage("/game/6veces.png");
        this.block11 = app.loadImage("/game/capturar.png");
        this.block12 = app.loadImage("/game/liberar.png");
    }

    draw(app) {
        this.drawScreen(app);
    }

    mousePressed(app) {
        switch (this.screen) {
            case 0:
                if (
                    app.mouseX > 521 &&
                    app.mouseX < 768 &&
                    app.mouseY > 421 &&
                    app.mouseY < 501
                ) {
                    this.screen = 1;
                }
                break;
            case 1:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 2;
                }
                break;
            case 2:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 3;
                }
                break;
            case 3:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 4;
                }
                break;
            case 4:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 5;
                }
                break;
            case 5:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 6;
                }
                break;
            case 6:
                if (
                    app.mouseX > 988 &&
                    app.mouseX < 1236 &&
                    app.mouseY > 601 &&
                    app.mouseY < 680
                ) {
                    this.screen = 7;
                }

                break;
            case 7:
                this.levelActivated = true;
                this.allowTimer = true;
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
                if (this.life == 3) {
                    app.image(this.life3, 1080, 56);
                } else if (this.life == 2) {
                    app.image(this.life2, 1080, 56);
                } else if (this.life == 1) {
                    app.image(this.life1, 1080, 56);
                }

                if (!this.capturado) {
                    app.image(this.pikachu, 530, 152);
                } else {
                    app.image(this.pikachu, -500, 152);
                }
                app.image(this.charmander, 620, 250);
                app.image(this.squirtle, 80, 260);
                app.image(this.bulbasaur, 530, 432);

                this.timer(app);

                switch (this.side) {
                    case 1:
                        app.image(this.playerF, this.playerX, this.playerY);
                        break;
                    case 2:
                        app.image(this.playerL, this.playerX, this.playerY);
                        break;
                    case 3:
                        app.image(this.playerR, this.playerX, this.playerY);
                        break;
                    case 4:
                        app.image(this.playerB, this.playerX, this.playerY);
                        break;
                }
                this.drawBlocks(28, app);
        }
    }

    reset() {
        this.playerX = 80;
        this.playerY = 146;
        this.capturado = false;
        console.log("perdiste");
    }

    validation(app) {

            for (let i = 0; i < this.arrayBloques.length; i++) {
                if (this.arrayBloques[i] == 1) {
                    this.side = 3;
                    switch (this.arrayBloques[i + 1]) {
                        case 5:
                            this.playerX = this.playerX + 90;

                            break;
                        case 6:
                            this.playerX = this.playerX + 90 * 2;



                            break;
                        case 7:
                            this.playerX = this.playerX + 90 * 3;

                            break;
                        case 8:
                            this.playerX = this.playerX + 90 * 4;

                            break;
                        case 9:
                            this.playerX = this.playerX + 90 * 5;

                            break;
                        case 10:
                            this.playerX = this.playerX + 90 * 6;

                            break;
                    }


                    if (
                        this.playerX < 52 ||
                        this.playerX > 785 ||
                        this.playerY < 138 ||
                        this.playerY > 450
                    ) {
                        this.reset();
                        this.life = this.life - 1;
                    }

                }
                if (this.arrayBloques[i] == 2) {
                    this.side = 2;
                    if (this.arrayBloques[i + 1] < 5 || this.arrayBloques[i + 1] > 10) {
                        this.reset();
                        this.life = this.life - 1;
                        console.log("recuerda indicar la cantidad de veces");
                    } else {
                        switch (this.arrayBloques[i + 1]) {
                            case 5:
                                this.playerX = this.playerX - 90;
                                break;
                            case 6:
                                this.playerX = this.playerX - 90 * 2;
                                break;
                            case 7:
                                this.playerX = this.playerX - 90 * 3;
                                break;
                            case 8:
                                this.playerX = this.playerX - 90 * 4;
                                break;
                            case 9:
                                this.playerX = this.playerX - 90 * 5;
                                break;
                            case 10:
                                this.playerX = this.playerX - 90 * 6;
                                break;
                        }

                    }
                    if (
                        this.playerX < 52 ||
                        this.playerX > 785 ||
                        this.playerY < 138 ||
                        this.playerY > 420
                    ) {
                        this.reset();
                        this.life = this.life - 1;
                    }
                }
                if (this.arrayBloques[i] == 3) {
                    this.side = 4;

                    if (this.arrayBloques[i + 1] < 5 || this.arrayBloques[i + 1] > 10) {
                        this.reset();
                        this.life = this.life - 1;
                        console.log("recuerda indicar la cantidad de veces");
                    } else {
                        switch (this.arrayBloques[i + 1]) {
                            case 5:
                                this.playerY = this.playerY - 90;
                                break;
                            case 6:
                                this.playerY = this.playerY - 90 * 2;
                                break;
                            case 7:
                                this.playerY = this.playerY - 90 * 3;
                                break;
                            case 8:
                                this.playerY = this.playerY - 90 * 4;
                                break;
                            case 9:
                                this.playerY = this.playerY - 90 * 5;
                                break;
                            case 10:
                                this.playerY = this.playerY - 90 * 6;
                                break;
                        }

                    }
                    if (
                        this.playerX < 52 ||
                        this.playerX > 785 ||
                        this.playerY < 138 ||
                        this.playerY > 420
                    ) {
                        this.reset();
                        this.life = this.life - 1;
                    }
                }
                if (this.arrayBloques[i] == 4) {
                    this.side = 1;
                    if (this.arrayBloques[i + 1] < 5 || this.arrayBloques[i + 1] > 10) {
                        this.reset();
                        this.life = this.life - 1;
                        console.log("recuerda indicar la cantidad de veces");
                    } else {
                        switch (this.arrayBloques[i + 1]) {
                            case 5:
                                this.playerY = this.playerY + 90;
                                break;
                            case 6:
                                this.playerY = this.playerY + 90 * 2;
                                break;
                            case 7:
                                this.playerY = this.playerY + 90 * 3;
                                break;
                            case 8:
                                this.playerY = this.playerY + 90 * 4;
                                break;
                            case 9:
                                this.playerY = this.playerY + 90 * 5;
                                break;
                            case 10:
                                this.playerY = this.playerY + 90 * 6;
                                break;
                        }

                    }
                    if (
                        this.playerX < 52 ||
                        this.playerX > 785 ||
                        this.playerY < 138 ||
                        this.playerY > 420
                    ) {
                        this.reset();
                        this.life = this.life - 1;
                    }
                }
                if (this.arrayBloques[i] == 11) {
                    if (app.dist(this.playerX, this.playerY, 530, 152) < 20) {
                        console.log("capturado Pikachu");
                        this.capturado = true;

                    } else {
                        console.log("pokémon equivocado");
                        this.capture = false;
                        this.reset();
                        this.life = this.life - 1;
                    }
                }
                if (this.arrayBloques[i] == 12) {
                    if (this.capturado) {
                        if (app.dist(this.playerX, this.playerY, 700.87, 417) < 20) {
                            console.log("Pikachu Liberado");
                            this.capturado = false;

                        } else {
                            console.log("lugar equivocado");
                            this.reset();
                            this.life = this.life - 1;
                        }
                    }

                }
                console.log("recorrio: " + i);
                console.log("x " + this.playerX);
                this.sleep(2000);
            }

        }
        /*keyPressed(app) {
                  let c = app.key;

                  if (c == "d") {
                      this.side = 3;
                      this.playerX = this.playerX + 90;
                  } else if (c == "a") {
                      this.side = 2;
                      this.playerX = this.playerX - 90;
                  } else if (c == "w") {
                      this.side = 4;
                      this.playerY = this.playerY - 90;
                  } else if (c == "s") {
                      this.side = 1;
                      this.playerY = this.playerY + 90;
                  } else if (c == " ") {
                      if (app.dist(this.playerX, this.playerY, 530, 152) < 20) {
                          console.log("capturado Pikachu");
                          this.capturado = true;
                      } else {
                          console.log("pokémon equivocado");
                          this.capture = false;
                          this.reset();
                          this.life = this.life - 1;
                      }
                  } else if (c == "Control") {
                      if (this.capturado) {
                          if (app.dist(this.playerX, this.playerY, 700.87, 417) < 20) {
                              console.log("Pikachu Liberado");
                              this.capturado = false;
                          } else {
                              console.log("lugar equivocado");
                              this.reset();
                              this.life = this.life - 1;
                          }
                      }
                  }
              }*/

    blocks(app) {
        if (this.levelActivated) {
            if (
                app.mouseX > 852 &&
                app.mouseX < 1006 &&
                app.mouseY > 211 &&
                app.mouseY < 245
            ) {
                console.log("DERECHA");
                let codeRight = 1;
                this.arrayBloques.push(codeRight);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 852 &&
                app.mouseX < 1006 &&
                app.mouseY > 278 &&
                app.mouseY < 312
            ) {
                console.log("IZQUIERDA");
                let codeLeft = 2;
                this.arrayBloques.push(codeLeft);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 852 &&
                app.mouseX < 1006 &&
                app.mouseY > 345 &&
                app.mouseY < 379
            ) {
                console.log("ARRIBA");
                let codeUp = 3;
                this.arrayBloques.push(codeUp);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 852 &&
                app.mouseX < 1006 &&
                app.mouseY > 412 &&
                app.mouseY < 446
            ) {
                console.log("ABAJO");
                let codeDown = 4;
                this.arrayBloques.push(codeDown);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1025 &&
                app.mouseX < 1104 &&
                app.mouseY > 211 &&
                app.mouseY < 245
            ) {
                console.log("UNA VEZ");

                let codeOne = 5;
                this.arrayBloques.push(codeOne);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1025 &&
                app.mouseX < 1104 &&
                app.mouseY > 278 &&
                app.mouseY < 312
            ) {
                console.log("DOS VECES");

                let codeTwo = 6;
                this.arrayBloques.push(codeTwo);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1025 &&
                app.mouseX < 1104 &&
                app.mouseY > 345 &&
                app.mouseY < 379
            ) {
                console.log("TRES VECES");

                let codeThree = 7;
                this.arrayBloques.push(codeThree);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1121 &&
                app.mouseX < 1200 &&
                app.mouseY > 211 &&
                app.mouseY < 245
            ) {
                console.log("CUATRO VECES");

                let codeFour = 8;
                this.arrayBloques.push(codeFour);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1121 &&
                app.mouseX < 1200 &&
                app.mouseY > 278 &&
                app.mouseY < 312
            ) {
                console.log("CINCO VECES");

                let codeFive = 9;
                this.arrayBloques.push(codeFive);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1121 &&
                app.mouseX < 1200 &&
                app.mouseY > 345 &&
                app.mouseY < 379
            ) {
                console.log("SEIS VECES");

                let codeSix = 10;
                this.arrayBloques.push(codeSix);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1022 &&
                app.mouseX < 1106 &&
                app.mouseY > 412 &&
                app.mouseY < 446
            ) {
                console.log("CAPTURAR");

                let codeCapture = 11;
                this.arrayBloques.push(codeCapture);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 1115 &&
                app.mouseX < 1199 &&
                app.mouseY > 412 &&
                app.mouseY < 446
            ) {
                console.log("LIBERAR");

                let codeFree = 12;
                this.arrayBloques.push(codeFree);
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 898 &&
                app.mouseX < 1052 &&
                app.mouseY > 655 &&
                app.mouseY < 704
            ) {
                console.log("LIMPIAR");
                this.arrayBloques = [];
                console.log("arrayBloques= " + this.arrayBloques);
            }

            if (
                app.mouseX > 730 &&
                app.mouseX < 884 &&
                app.mouseY > 655 &&
                app.mouseY < 704
            ) {
                console.log("DESHACER");
                this.arrayBloques.pop();
                console.log("arrayBloques= " + this.arrayBloques);
            }
            if (
                app.mouseX > 1069 &&
                app.mouseX < 1223 &&
                app.mouseY > 655 &&
                app.mouseY < 704
            ) {
                this.validation(app);
            }
        }
    }

    drawBlocks(posx, app) {
        if (this.levelActivated) {
            for (let index = 0; index < this.arrayBloques.length; index++) {
                if (this.arrayBloques[index] == 1) {
                    app.image(this.block1, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 2) {
                    app.image(this.block2, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 3) {
                    app.image(this.block3, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 4) {
                    app.image(this.block4, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 5) {
                    app.image(this.block5, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 6) {
                    app.image(this.block6, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 7) {
                    app.image(this.block7, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 8) {
                    app.image(this.block8, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 9) {
                    app.image(this.block9, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 10) {
                    app.image(this.block10, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 11) {
                    app.image(this.block11, posx + 140 * index, 570);
                }

                if (this.arrayBloques[index] == 12) {
                    app.image(this.block12, posx + 140 * index, 570);
                }
            }
        }
    }

    timer(app) {
        if (this.allowTimer) {
            if (app.frameCount % 60 == 0) {
                this.s += 1;
            }
            if (this.s == 60) {
                this.s = 0;
                this.m += 1;
            }

            let t = app.nf(this.m, 2) + ":" + app.nf(this.s, 2);
            console.log(t);
            app.text(t, 900, 81);
        }
    }
    sleep(milliseconds) {

        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}

export default Game;