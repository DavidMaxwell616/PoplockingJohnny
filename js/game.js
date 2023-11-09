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
  var y = 100;
  var i = 0;
  styles.forEach(style => {
    var button = this.add.text(50, y, style, { fill: '#fff' });
    button.setInteractive();
    button.tag = style;
    button.id = i;
    button.on('pointerdown', () => clickButton(button));
    buttons.push(button);
    y += 50;

    var dudeStyle = this.add.sprite(500, 300, style).setScale(2);
    this.anims.create({
      key: style,
      frames: this.anims.generateFrameNumbers(style, {}),
      frameRate: 8,
      repeat: -1,
    });
    dudeStyle.visible = false;
    dude.push(dudeStyle);
    i++;
  });
  dude[0].visible = true;
  dude[0].anims.play(buttons[0].tag);
  buttons[0].setTint(0x0ff000);
 
   // groovesong = this.sound.add('groove');
  // groovesong.setLoop(true);
  // groovesong.play();

}
function clickButton(e) {
  styles.forEach(style => {
    buttons[styles.indexOf(style)].setTint(0xffffff);
  });

    dude[currentStyle].visible = false;
  dude[e.id].visible = true;
  dude[e.id].anims.play(e.tag);
  e.setTint(0x00ff00);
  currentStyle = e.id;
}

function update() {
  //console.log(dude[1].x);
}


