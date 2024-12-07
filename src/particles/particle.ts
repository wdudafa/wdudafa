class Particle {
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };
  radius: number = 2.5 * Math.random();
  targetPosition: { x: number; y: number };

  constructor(
    ctx: CanvasRenderingContext2D,
    position: { x: number; y: number }
  ) {
    this.ctx = ctx;
    this.position = { ...position };
    this.targetPosition = { ...position };
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }

  update() {
    const randomFactor = 0.7;

    const dx = this.targetPosition.x - this.position.x;
    const dy = this.targetPosition.y - this.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const moveRate = 50;
    if (distance > 1) {
      this.position.x += dx / moveRate;
      this.position.y += dy / moveRate;
    }

    this.targetPosition.x += Math.random() * randomFactor;
    this.targetPosition.y += Math.random() * randomFactor * 2;
  }
}

export default Particle;
