import { Application, Graphics } from 'pixi.js';
import { Rect, RectConfig } from '../types';

export function createRect(
  game: Application,
  { position, color, width, height, angle, alpha, options, filter }: RectConfig,
): Rect {
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
  graphics.transform.pivot.set(width / 2, height / 2);
  graphics.transform.position.set(position.x, position.y);
  graphics.beginFill(color, alpha ? alpha : 1);
  graphics.drawRect(0, 0, width, height);
  graphics.angle = angle;
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
        graphics.drawRect(
          ops.position.x,
          ops.position.y,
          ops.width,
          ops.height,
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
      if (ops.width) {
        graphics.width = ops.height;
      }
      if (ops.height) {
        graphics.height = ops.height;
      }
      if (ops.color) {
        graphics.fill.color = ops.color;
      }
    },
  };
}
