
//create a new game object to instantiate our "Beams" by extending the PHaser Sprite Class
class Beam extends Phaser.GameObjects.Sprite{

    constructor(scene){

        var x = scene.player.x;
        var y = scene.player.y;
        super(scene, x, y, "beam");
        scene.projectiles.add(this);

        this.play("beam_animation");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

    };
}