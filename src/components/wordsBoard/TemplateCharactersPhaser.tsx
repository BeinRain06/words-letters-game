import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 594,
  height: 324,
  backgroundColor: "#2d2d2d",
  scene: {
    create: create,
  },
};

const game = new Phaser.Game(config);

function create() {
  let myObjects = [];
}
