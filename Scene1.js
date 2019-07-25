//Create class definition for Scene1
class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame"); //makes the class inherit all the characteristics of its predecessor the class Scene from Phaser 
               //bootGame uses to identify the scene    
    }

    preload(){
        this.load.image("background", "assets/images/space.png");//load the image for background
        
        //this.load.image("ship", "assets/images/ship.png"); //load ships
        //this.load.image("ship2", "assets/images/ship2.png");
        //this.load.image("ship3", "assets/images/ship3.png");

        //changing load.images to load.spritesheet for animation
        this.load.spritesheet("ship", "assets/spritesheets/ship.png", {
            frameWidth:16,    //define size of the frame
            frameHeight:16
        }); 
        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
            frameWidth:32, 
            frameHeight:16
        }); 
        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
            frameWidth:32, 
            frameHeight:32
        });
        this.load.spritesheet("ship4", "assets/spritesheets/ship2.png", {
            frameWidth:32,   
            frameHeight:16
        }); 
        this.load.spritesheet("ship5", "assets/spritesheets/ship.png", {
            frameWidth:16, 
            frameHeight:32
        }); 
        this.load.spritesheet("ship6", "assets/spritesheets/ship3.png", {
            frameWidth:32, 
            frameHeight:32
        });

        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
            frameWidth:16, 
            frameHeight:16
        }); 
        this.load.spritesheet("power-up", "assets/spritesheets/power-up.png", {
            frameWidth:16,
            frameHeight:16
        });
        this.load.spritesheet("player", "assets/spritesheets/player.png", {
            frameWidth: 64,
            frameHeight: 59
        });
        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16   
        });

    };

    create(){
        this.add.text(20, 20, "Loading Game..."); //Create a text object in the Scene1(x, y, "text")
        this.scene.start("playGame"); // switch to the Scene2

        //ANIMATION
        // this.anims.create({key, frames, frameRate, repeat}) animation function
        this.anims.create({
            key: "ship_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });

        this.anims.create({
            key: "ship2_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship2"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });

        this.anims.create({
            key: "ship3_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship3"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });
        this.anims.create({
            key: "ship4_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });
        this.anims.create({
            key: "ship5_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship2"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });
        this.anims.create({
            key: "ship6_animation",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("ship3"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: -1 //for infinite loop use -1
        });

        //animating explosion
        this.anims.create({
            key: "explode",  //we create animation named "ship_animation"
            frames: this.anims.generateFrameNumbers("explosion"), //using the frames from the "ship" spritesheet
            frameRate: 20, // telling it to play at 20 frames per second
            repeat: 0,
            hideOnComplete: true  //explosion disappear when it complete (we want it to run just once)
        });
        //animating power-up
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"), 
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "beam_animation",
            frames: this.anims.generateFrameNumbers("beam"), 
            frameRate: 20,
            repeat: -1
        });

    }

}