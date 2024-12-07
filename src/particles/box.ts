import Particle from "./particle";

class Box {
  ctx: CanvasRenderingContext2D;
  particles: Particle[] = [];

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    window.addEventListener("mousemove", (event) => {
      this.checkCollisions(event.clientX, event.clientY);
    });
  }

  addParticle(x: number, y: number) {
    const particle = new Particle(this.ctx, { x: x, y: y });
    this.particles.push(particle);
    particle.draw();
  }

  updateParticles() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.particles.forEach((particle) => {
      particle.update();
      const position = particle.position;
      if (position.x - particle.radius > window.innerWidth) {
        position.x = -particle.radius;
      }
      if (position.y - particle.radius > window.innerHeight) {
        position.y = -particle.radius;
      }
      particle.setPosition(position);
      particle.draw();
    });
    window.requestAnimationFrame(() => this.updateParticles());
  }

  checkCollisions(x: number, y: number) {
    const mouseRadius = 200 * 0.8;
    this.particles.forEach((particle) => {
      const position = particle.position;
      const distance = Math.sqrt(
        Math.pow(position.x - x, 2) + Math.pow(position.y - y, 2)
      );
      if (distance < mouseRadius) {
        const angle = Math.atan2(position.y - y, position.x - x);
        position.x = x + Math.cos(angle) * mouseRadius;
        position.y = y + Math.sin(angle) * mouseRadius;
        particle.setPosition(position);
      } else {
      }
    });
  }
}

export default Box;
