import { Graphics } from 'pixi.js';

export interface Animatable<T> {
  g: Graphics;
  update(options?: T): void;
  set(options?: T): void;
  remove(): void;
}
