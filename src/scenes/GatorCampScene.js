import 'phaser';
class GatorCampScene extends Phaser.Scene {
  constructor(args) {
    super();
  }

  preload() {
    this.load.audio({
      key: 'electric',
      url: 'assets/electric.mp3',
    });
    this.load.audio({
      key: 'club',
      url: 'assets/club.mp3',
    });
    this.load.audio({
      key: 'axe',
      url: 'assets/axe.mp3',
    });
  }
  init(data) {
    console.log('init', data);
    this.characterId = data.id[0];
    this.attackSound = data.id[1];
  }
  create() {
    var newLeftChar;
    var quote = '';
    var newHeight = this.game.config.height;
    var newWidth = this.game.config.width;
    var mainCharacter = this.characterId;
    var attackSound = this.attackSound;
    var bgSound = this.sound.add('bgAudio');
    bgSound.play();
    bgSound.setLoop(true);
    var topContainer = this.add.container(0, 0);
    var speechContainerHeight = newWidth * 0.25;
    if (newHeight <= 780) speechContainerHeight = newWidth * 0.2;
    var speechContainer = this.add.container(
      newWidth * 0.17,
      speechContainerHeight
    );
    var bally = this.createBall(0, 0);
    bally.setVisible(false);
    topContainer.setSize(newWidth, newHeight * 0.15);
    var speechBubble = this.createSpeechBubble(quote);
    speechContainer.add(speechBubble.bubble);
    speechContainer.add(speechBubble.content);
    speechContainer.setVisible(false);
    var theCounter = 0;
    var questComplete = this.add.text(
      20,
      newHeight * 0.001,
      `Quests Completed`,
      {
        fontFamily: '"Cinzel"',
        fontSize: '2vw',
      }
    );
    var questCounter = this.add.text(20, newHeight * 0.055, `${theCounter}/3`, {
      fontFamily: '"Cinzel"',
      fontSize: '2vw',
    });
    var backButton = this.add
      .image(10, 10, 'backButton')
      .setScale(newWidth / 3000)
      .setOrigin(0, 0)
      .setInteractive()
      .on('pointerdown', function (pointer) {
        this.setTint(11843512);
        this.scene.sound.stopAll();
        this.scene.scene.start('HomeScene');
      })
      .on('pointerout', function (pointer) {
        this.clearTint();
      })
      .on('pointerup', function (pointer) {
        this.clearTint();
      });
    var bg = this.add
      .image(0, 0, 'bg')
      .setPipeline('Light2D')
      .setAlpha(0.2)
      .setScale(newWidth / 1920)
      .setOrigin(0, 0.04)
      .setTint(11843512);
    var headingImage = this.add
      .image(newWidth * 0.5, -500, 'gatorHeading')
      .setOrigin(0.5)
      .setScale(newWidth / 4000);
    this.tweens.add({
      targets: headingImage,
      y: newHeight * 0.1,
      ease: 'Bounce.easeInOut',
      delay: 0,
      duration: 1000,
    });
    var frameNames2;
    if (mainCharacter === 'counselor1') {
      frameNames2 = this.anims.generateFrameNames(mainCharacter, {
        start: 0,
        end: 3,
        zeroPad: 3,
        prefix: mainCharacter + 'Attack_',
        suffix: '.png',
      });
    } else {
      frameNames2 = this.anims.generateFrameNames(mainCharacter, {
        start: 0,
        end: 6,
        zeroPad: 3,
        prefix: mainCharacter + 'Attack_',
        suffix: '.png',
      });
    }
    this.anims.create({
      key: mainCharacter + 'animation2',
      frames: frameNames2,
      frameRate: 8,
      repeat: 1,
    });
    var owlQuest = false;
    var owl = this.add
      .image(newWidth * 0.55, newHeight * 0.64, 'owl')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive()
      .setScale(newWidth / 8500)
      .setOrigin(0.5, 0.5)
      .on('pointerover', function (pointer) {
        quote = '"There are tons of animals and plants to see."';
        if (!owlQuest) {
          owlQuest = true;
          theCounter++;
          questCounter.setText(`${theCounter}/3`);
          bally = this.scene.createBall(this.x, this.y);
          bally.setVisible(true);
          this.scene.tweens.add({
            targets: bally,
            x: 40,
            y: 150,
            alpha: 0,
            scale: 0.1,
            ease: 'sine.in',
            duration: 1750,
          });
        }
        this.scene.sound.add('owlAudio').play();
        speechContainer.setVisible(true);
        speechBubble.content.setText(quote);
      })
      .on('pointerout', function (pointer) {
        speechContainer.setVisible(false);
      });
    var bearQuest = false;
    var bear = this.add
      .image(newWidth * 0.85, newHeight * 0.76, 'bear')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive()
      .setScale(newWidth / 6500)
      .setOrigin(0.5, 0.5)
      .on('pointerover', function (pointer) {
        if (!bearQuest) {
          bearQuest = true;
          theCounter++;
          questCounter.setText(`${theCounter}/3`);
          bally = this.scene.createBall(this.x, this.y);
          bally.setVisible(true);
          this.scene.tweens.add({
            targets: bally,
            x: 40,
            y: 150,
            alpha: 0,
            scale: 0.1,
            ease: 'sine.in',
            duration: 1750,
          });
        }
        this.scene.sound.add('bearAudio').play();
        quote =
          '"Be careful where you go you never know what is lurking in the shadows."';
        speechContainer.setVisible(true);
        speechBubble.content.setText(quote);
      })
      .on('pointerout', function (pointer) {
        speechContainer.setVisible(false);
      });
    var gatorQuest = false;
    var gator = this.add
      .image(newWidth * 0.6, newHeight * 0.95, 'gator2')
      .setBlendMode(Phaser.BlendModes.NORMAL)
      .setPipeline('Light2D')
      .setAlpha(0.6)
      .setInteractive()
      .setScale(newWidth / 3500)
      .setOrigin(0.5, 0.5)
      .on('pointerover', function (pointer) {
        if (!gatorQuest) {
          gatorQuest = true;
          theCounter++;
          questCounter.setText(`${theCounter}/3`);
          bally = this.scene.createBall(this.x, this.y);
          bally.setVisible(true);
          this.scene.tweens.add({
            targets: bally,
            x: 40,
            y: 150,
            alpha: 0,
            scale: 0.1,
            ease: 'sine.in',
            duration: 1750,
          });
        }
        this.scene.sound.add('gatorAudio').play();
        quote =
          '"We have tons of food and the choices are endless(not really): Chicken or Kale. Well, I guess Gator is back on the menu."';
        speechContainer.setVisible(true);
        speechBubble.content.setText(quote);
        newLeftChar.anims.play(mainCharacter + 'animation2');
        this.scene.sound.add(attackSound).play();

        this.scene.tweens.chain({
          targets: gator,
          tweens: [
            {
              x: newWidth * 0.5,
              ease: 'Quad.easeOut',
              delay: 0,
              duration: 500,
            },
            {
              alpha: 0,
              ease: 'Quad.easeInOut',
              delay: 1000,
              duration: 1000,
            },
          ],
        });
      })

      .on('pointerout', function (pointer) {
        speechContainer.setVisible(false);
        newLeftChar.anims.play(mainCharacter + 'animation');
      });
    newLeftChar = this.add
      .sprite(1, 0.5, mainCharacter, `${mainCharacter}Idle_000.png`)
      .setInteractive()
      .setScale(newWidth / 1800)
      .on('pointerdown', function (pointer) {
        this.setTint(11843512);
        this.anims.play(mainCharacter + 'animation2');
        this.scene.sound.add(attackSound).play();
        this.scene.sound.add(attackSound).play();
      })
      .on('pointerout', function (pointer) {
        this.clearTint();
        this.anims.play(mainCharacter + 'animation');
      })
      .on('pointerup', function (pointer) {
        this.clearTint();
      });
    this.lights.enable();
    this.lights.setAmbientColor(0x808080);

    var spotlight = this.lights.addLight(400, 300, 280).setIntensity(10);
    3;
    this.input.on('pointermove', function (pointer) {
      spotlight.x = pointer.x;
      spotlight.y = pointer.y;
    });
    var colors = [0xffffff, 0xff0000, 0x00ff00, 0x00ffff, 0xff00ff, 0xffff00];
    var currentColor = 0;
    this.input.on('pointerdown', function (pointer) {
      currentColor++;
      if (currentColor === colors.length) {
        currentColor = 0;
      }
      spotlight.setColor(colors[currentColor]);
    });

    var campContainer = this.add
      .container(0, newHeight * 0.2)
      .setSize(newWidth, newHeight * 0.85);
    var newLeftContainer = this.add
      .container(newWidth / 6 - 10, newHeight / 2)
      .setSize('22vw', '30vh');
    topContainer.add(backButton);
    newLeftContainer.add(newLeftChar);
    campContainer.add(bg);
    campContainer.add(newLeftContainer);
    campContainer.add(questCounter);
    campContainer.add(questComplete);
    newLeftChar.anims.play(mainCharacter + 'animation');
  }
  createSpeechBubble(quote) {
    var bubbleWidth = 225;
    var bubbleHeight = 175;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = this.add.graphics({ x: 0, y: 0 });
    //  Bubble shadow
    bubble
      .fillStyle(0x222222, 0.5)
      .fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16)
      .fillStyle(0xffffff, 1)
      .lineStyle(4, 0x565656, 1)
      .strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16)
      .fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    var point1X = Math.floor(bubbleWidth / 7);
    var point1Y = bubbleHeight;
    var point2X = Math.floor((bubbleWidth / 7) * 2);
    var point2Y = bubbleHeight;
    var point3X = Math.floor(bubbleWidth / 7);
    var point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble
      .lineStyle(4, 0x222222, 0.5)
      .lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y)
      .fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y)
      .lineStyle(2, 0x565656, 1)
      .lineBetween(point2X, point2Y, point3X, point3Y)
      .lineBetween(point1X, point1Y, point3X, point3Y);

    var content = this.add
      .text(0, 0, quote, {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#000000',
        align: 'center',
        wordWrap: { width: bubbleWidth - bubblePadding * 2 },
      })
      .setPosition(bubble.x + 15, bubble.y + 15);

    // const b = content.getBounds();

    // content.setPosition(
    //   bubble.x + bubbleWidth / 2 - b.width / 2,
    //   bubble.y + bubbleHeight / 2 - b.height / 2
    // );

    return { bubble, content };
  }
  createBall(x, y) {
    var ball = this.add.graphics();
    ball.fillGradientStyle(0xff0000, 0xff0000, 0xffff00, 0xffff00, 1);
    ball.fillCircle(10, 10, 10);
    ball.setPosition(x, y);
    const fx1 = ball.postFX.addGlow(0xff0000, 0, 0, false, 0.1, 24);
    if (ball.visible === true) {
      this.tweens.add({
        targets: fx1,
        color: 0xffff00,
        outerStrength: 4,
        yoyo: true,
        loop: -1,
        ease: 'sine.inout',
      });
    }

    return ball;
  }
}

export default GatorCampScene;
