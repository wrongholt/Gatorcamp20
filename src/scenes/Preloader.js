import 'phaser';
import 'webfontloader';
import WebFontFile from '../helpers/webfont.js';
class BootScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {
    this.load.multiatlas('counselor1', 'assets/counselor1.json', 'assets');
    this.load.multiatlas('counselor2', 'assets/counselor2.json', 'assets');
    this.load.multiatlas('counselor3', 'assets/counselor3.json', 'assets');
    this.load.addFile(new WebFontFile(this.load, ['Cinzel', 'Lato', 'Caveat']));
    this.load.image('gatorHeading', 'assets/gatorCamp.png');
    this.load.image('gatorHeading2', 'assets/gatorCamp.png');
    this.load.image('bg', 'assets/camp.jpg');
    this.load.image('backButton', 'assets/backNeon.png');
    this.load.image('owl', 'assets/owl.png');
    this.load.image('gator2', 'assets/gator2.png');
    this.load.image('bear', 'assets/bear.png');
    
    this.load.audio({
      key: 'bgAudio',
      url: 'assets/nightForest.mp3',
    });
    this.load.audio({
      key: 'owlAudio',
      url: 'assets/owl.mp3',
    });
    this.load.audio({
      key: 'bearAudio',
      url: 'assets/bear.mp3',
    });
    this.load.audio({
      key: 'gatorAudio',
      url: 'assets/gator.mp3',
    });
    this.load.audio({
      key: 'gatorcampMusic',
      url: 'assets/gatorcamp.mp3',
    });
    this.load.audio({
      key: 'gatorAudio',
      url: 'assets/Electric_Explosion.wav',
    });
    this.load.audio({
      key: 'gatorAudio',
      url: 'assets/Club_Impact.wav',
    });
    this.load.audio({
      key: 'gatorAudio',
      url: 'assets/gator.mp3',
    });
    
  }

  create() {
    this.scene.start('HomeScene');
  }
}

export default BootScene;
