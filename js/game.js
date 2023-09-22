var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'canvas',
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);

function create() {

  head = this.add.sprite(292, 70, 'head');
  var y = 100;
  styles.forEach(style => {
  var button = this.add.text(50, y, style, { fill: '#0f0' });
  button.setInteractive();
  buttons.push(button);
  y+=50;

  var dudeStyle = this.add.sprite(292, 330, style).setScale(2);
   this.anims.create({
       key: style,
       frames: this.anims.generateFrameNumbers(style, {}),
       frameRate: 16,
       repeat: -1,
       yoyo: true
     });
    dude.push(dudeStyle);
    dudeStyle.visible = false;
    });
 
  //dude_gliding.anims.play('gliding');
  //dude_locking.anims.play('locking');

  // dude_idle.anims.play('idle');
  groovesong = this.sound.add('groove');
  groovesong.setLoop(true);
  groovesong.play();

}


function update(){
  }


