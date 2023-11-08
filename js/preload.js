function preload() {
  this.load.path = '../assets/images/';
  this.load.path = '../assets/sounds/';
  this.load.audio('groove', 'groovesong.mp3');
  this.load.path = '../assets/images/';
  this.load.spritesheet('idle', 'idle.png', {frameWidth: 105, frameHeight: 300});
  this.load.spritesheet('gliding', 'gliding.png', {frameWidth: 160, frameHeight: 300});
  this.load.spritesheet('locking', 'locking.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('popping', 'popping.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('puppet', 'puppet.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('robot', 'robot.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('snaking', 'snaking.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('waving', 'waving.png', {frameWidth: 200, frameHeight: 300});
  this.load.spritesheet('boogaloo', 'boogaloo.png', {frameWidth: 200, frameHeight: 300});
}
