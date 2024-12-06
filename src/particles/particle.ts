class Particle {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  radius: number;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.radius = 20;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.lineWidth = 0;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }

  update() {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
  }
}

export default Particle;
