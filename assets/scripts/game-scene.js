export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
      };
    
      preload() {
        this.load.image('background', '../assets/sprites/intro-backgroud.png')
        this.load.image('girl', '../assets/sprites/intro-girl.png')
        this.load.image('dress-bg', '../assets/sprites/dress-bg.png')
      };
    
      create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.add.image(0, 0, 'girl').setOrigin(-0.1, 0);

        this.createDress();
      };

      createDress() {
        this.dresses = [];
        let positions = this.getDressBgPosition();

        for (let position of positions) {
          this.dresses.push(new Dress(this, position));
          this.add.image(position.x, position.y, 'dress-bg').setOrigin(0, 0);
        };
      };


      getDressBgPosition = function() {
        let positions = [
          {
            x: 40, y: 565
          },
          {
            x: 310, y: 565
          }
        ];

        return positions;
      };
    
      update() {
        console.log('Update')
      };
};