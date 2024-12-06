import Particle from "./particle";

class Box {
  ctx: CanvasRenderingContext2D;
  particles: Particle[] = [];

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  addParticle(x: number, y: number) {
    const particle = new Particle(this.ctx, x, y);
    this.particles.push(particle);
    particle.draw();
  }

  updateParticles() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    window.requestAnimationFrame(() => this.updateParticles());
  }
}

export default Box;
