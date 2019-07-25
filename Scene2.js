//Create class definition for Scene2

class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame"); //makes the class inherit all the characteristics of its predecessor the class Scene from Phaser 
               //playGame uses to identify the scene 
    }

    create(){
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background"); //setting a class variable for the background
        this.background.setOrigin(0,0); //specifying img position

        //this.ship1 = this.add.image(config.width/2-100, config.height/2, "ship");
        //this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
        //this.ship3 = this.add.image(config.width/2+100, config.height/2, "ship3");
        
        // new decla ration using sprite
        this.ship1 = this.add.sprite(config.width/2-50, config.height/2, "ship");
        this.ship2 = this.add.sprite(config.width/2, config.height/2, "ship2");
        this.ship3 = this.add.sprite(config.width/2+50, config.height/2, "ship3");
        this.ship4 = this.add.sprite(config.width/2-100, config.height/3, "ship2");
        this.ship5 = this.add.sprite(config.width/2, config.height/3, "ship3");
        this.ship6 = this.add.sprite(config.width/2+100, config.height/3, "ship");

        this.player = this.physics.add.sprite(config.width/2, config.height-64, "player");
        this.player.play("thrust");
        //creating a variable to lisen for keyboard events
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        //set bounderies for players ship
        this.player.setCollideWorldBounds(true);
        //let player to shoot
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        

        
        this.powerUps = this.physics.add.group(); //create a group for power-ups
        var maxObjects = 4;
        for (var i=0; i<= maxObjects; i++){   //create the number of power-ups we want
            var powerUp = this.physics.add.sprite(16, 16, "power-up");
            this.powerUps.add(powerUp); 
            powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
            //add random animation to power-ups
            if (Math.random() > 0.5) {
                powerUp.play("red");
            } else {
                powerUp.play("gray");
            }

            //set velocity to power-ups
            powerUp.setVelocity(100, 100);
            //set boundaries to power-ups moving
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }


        this.ship1.play("ship_animation");
        this.ship2.play("ship2_animation");
        this.ship3.play("ship3_animation");
        this.ship4.play("ship_animation");
        this.ship5.play("ship2_animation");
        this.ship6.play("ship3_animation");

        //making ships interactive
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();
        this.ship4.setInteractive();
        this.ship5.setInteractive();
        this.ship6.setInteractive();

        //add en event that listens whenever ship is clicked
        this.input.on("gameobjectdown", this.destroyShip, this);
        //gameobject defines that event triggers when object is clicked and automatically scopes the callback function to the ship



        this.add.text(20, 20, "Playing Game", {font: "24px Roboto", fill: "DeepPink"});
    
    
    
    }

    //moving ship own to the bottom og the screen
    moveShip(ship, speed){
        ship.y += speed; //increasing vertical speed
        if (ship.y > config.height){
            this.resetShipPosition(ship);
        }
        
    }

    //call moveship function for our ships
    update(){
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 3);
        this.moveShip(this.ship4, 1);
        this.moveShip(this.ship5, 2);
        this.moveShip(this.ship6, 3);

        this.background.tilePositionY -=0.5;

        //all a function to control players ship
        this.movePlayerManager();

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.shootBeam();
        }
    }

    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        //allow player to move vertically
        if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }

    //reset ship position to the top of the screen and placing ship on a random X position
    //this func accepts the ship as an object parameter 
    resetShipPosition(ship){
        ship.y = 0; //sets its Y position to 0
        var randomX = Phaser.Math.Between(0, config.width);    //creating a random value between zero and the width of canvas
        ship.x = randomX;
    }

    //function to destroy the ship
    destroyShip(pointer, gameObject){
        gameObject.setTexture("explosion"); //when the ship is clicked we switch its texture
        gameObject.play("explode");
    }

    //function creats a new image object for shooting
    shootBeam(){
        var beam = new Beam(this);
        //var beam = this.physics.add.sprite(this.player.x, this.player.y, "beam");      
    }



}