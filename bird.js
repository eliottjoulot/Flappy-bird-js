class Bird {
  constructor() {
    this.y = (height / 2) - 50;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -9;
    this.velocity = 0;

    this.icon = birdSprite;
    this.width = 50;
    this.height = 50;
  }

  show() {
    // draw the icon CENTERED around the X and Y coords of the bird object
    image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  up() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Touching ground
    if (this.y >= height - this.height / 2 - 59) {
      this.y = height - this.height / 2 - 59;
      this.velocity = 0;
    }
    // Touching sky
    if (this.y <= this.height / 2) {
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}