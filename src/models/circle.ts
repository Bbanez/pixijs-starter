import { Application, Graphics } from 'pixi.js';
import { Circle, CircleConfig } from '../types';

export function createCircle(
  game: Application,
  { position, color, size, alpha, options, filter }: CircleConfig,
): Circle {
  const graphics = new Graphics();
  if (filter) {
    graphics.filters = [filter];
  }
  if (options && options.border) {
    graphics.lineStyle(
      options.border.width,
      options.border.color,
      options.border.alpha,
    );
  } else {
    graphics.lineStyle(0);
  }
  graphics.beginFill(color, alpha ? alpha : 1);
  graphics.drawCircle(position.x, position.y, size);
  graphics.moveTo(position.x, position.y);
  graphics.endFill();
  game.stage.addChild(graphics);

  return {
    g: graphics,
    remove() {
      graphics.destroy();
      game.stage.removeChild(graphics);
    },
    set(ops) {
      if (!ops) {
        return;
      }
      if (ops.position) {
        graphics.clear();
        graphics.beginFill(color, alpha ? alpha : 1);
        graphics.drawCircle(
          ops.position.x,
          ops.position.y,
          ops.size ? ops.size : size,
        );
        graphics.moveTo(ops.position.x, ops.position.y);
        graphics.endFill();
      }
      if (ops.color) {
        graphics.fill.color = ops.color;
      }
    },
    update(ops) {
      if (!ops) {
        return;
      }
      if (ops.position) {
        graphics.position.x = graphics.position.x + ops.position.x;
        graphics.position.y = graphics.position.y + ops.position.y;
      }
      if (ops.size) {
        graphics.width = graphics.width + ops.size;
        graphics.height = graphics.height + ops.size;
      }
      if (ops.color) {
        graphics.fill.color = ops.color;
      }
    },
  };
}
