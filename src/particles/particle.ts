class Particle {
  radius: number;
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };

  constructor(
    ctx: CanvasRenderingContext2D,
    position: { x: number; y: number }
  ) {
    this.ctx = ctx;
    this.radius = 20;
    this.position = position;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.lineWidth = 0;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }

  update() {
    const randomMovementScale = 1;
    this.position.x += Math.random() * randomMovementScale;
    this.position.y += Math.random() * randomMovementScale;
  }

  setPosition(position: { x: number; y: number }) {
    this.position = position;
  }
}

export default Particle;
