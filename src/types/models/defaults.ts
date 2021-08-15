import { Filter } from 'pixi.js';
import { Point } from '../point';

export interface DefaultModelInputs {
  position: Point;
  angle?: number;
  color: number;
  alpha?: number;
  filter?: Filter;
  options?: {
    border?: {
      width: number;
      color: number;
      alpha?: number;
    };
  };
}
