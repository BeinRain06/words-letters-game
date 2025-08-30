import Phaser from "phaser";

export default class MySelectedScene extends Phaser.Scene {
  constructor() {
    super({ key: "MySelectedScene" });
  }

  create(data) {
    let myObjects: Array<Phaser.GameObjects.Graphics> = [];

    let totalBoxes: number[] = [72, 81, 90];

    console.log("totalBoxes :", totalBoxes);

    if (data.selectedTemplate === "8") {
      for (let i = 0; i < totalBoxes[0]; i++) {
        let box: Phaser.GameObjects.Graphics = this.add.graphics();

        // draw a rectangle box
        box.fillStyle(Phaser.Display.Color.RandomRGB().color, 1);
        box.fillRect(0, 0, 74, 40);
        myObjects.push(box);
      }
      //arrange each box in a grid settling each one position
      Phaser.Actions.GridAlign(myObjects, {
        width: 8, // columns for your "8" template
        height: 9, //columns for your "8" template
        cellWidth: 80, // spacing
        cellHeight: 50, // spacing
        x: 50, // start X
        y: 50, // start Y
      });
    } else if (data.selectedTemplate === "9") {
      for (let i = 0; i < totalBoxes[1]; i++) {
        let box: Phaser.GameObjects.Graphics = this.add.graphics();

        // draw a rectangle box
        box.fillStyle(Phaser.Display.Color.RandomRGB().color, 1);
        box.fillRect(0, 0, 66, 36);
        myObjects.push(box);
      }
      //arrange each box in a grid settling each one position
      Phaser.Actions.GridAlign(myObjects, {
        width: 9, // columns for your "8" template
        height: 9, //columns for your "8" template
        cellWidth: 72, // spacing
        cellHeight: 46, // spacing
        x: 50, // start X
        y: 50, // start Y
      });
    } else if (data.selectedTemplate === "10") {
      for (let i = 0; i < totalBoxes[2]; i++) {
        let box: Phaser.GameObjects.Graphics = this.add.graphics();

        // draw a rectangle box
        box.fillStyle(Phaser.Display.Color.RandomRGB().color, 1);
        box.fillRect(0, 0, 65, 42);
        myObjects.push(box);
      }
      //arrange each box in a grid settling each one position
      Phaser.Actions.GridAlign(myObjects, {
        width: 10, // columns for your "8" template
        height: 9, //columns for your "8" template
        cellWidth: 80, // spacing
        cellHeight: 50, // spacing
        x: 50, // start X
        y: 50, // start Y
      });
    }
  }
}
