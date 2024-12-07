class Particle {
  radius: number = 2.5 * Math.random();
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };
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
    this.ctx.lineWidth = 0;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
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

  setPosition(position: { x: number; y: number }) {
    this.position = position;
  }

  setTargetPosition(targetPosition: { x: number; y: number }) {
    this.targetPosition = targetPosition;
  }
}

export default Particle;
