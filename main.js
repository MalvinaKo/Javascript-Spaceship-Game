
        var config = {  //defining dimensions of the background
            width: 800,
            height: 600,
            backgroundColor: 0x000000,
            scene: [Scene1, Scene2], //specify (in the configuration of the game) scenes in an array
            pixelArt: true,
            physics: {    //enable game to support physics
                default: "arcade",
                arcade: {
                    debug: false
                }
            }
        };
        var game = new Phaser.Game(config); // Creating a new instance of a Phaser game and passing config as a parameter to the game
        var gameSettings = {
            playerSpeed: 200,
        }
