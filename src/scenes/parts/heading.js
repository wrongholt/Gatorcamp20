export function header() {
  var newHeight = this.game.config.height;
  var newWidth = this.game.config.width;
  var topContainer = this.add.container(0, 0);
  topContainer.setSize(newWidth, newHeight * 0.15);
  var backButton = this.add.image(1, 1, 'back');
  backButton.setOrigin(-0.02, -0.02);
  backButton.setScale(0.4);
  backButton.setInteractive();
  backButton.on('pointerdown', function (pointer) {
    this.setTint(11843512);
    this.scene.scene.start('HomeScene');
  });
  backButton.on('pointerout', function (pointer) {
    this.clearTint();
  });

  backButton.on('pointerup', function (pointer) {
    this.clearTint();
  });
  return topContainer.add(headingImage);
}
