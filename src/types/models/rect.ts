import { Animatable } from '../animatable';
import { DefaultModelInputs } from './defaults';

export interface RectConfig extends DefaultModelInputs {
  angle: number;
  width: number;
  height: number;
}

export type Rect = Animatable<RectConfig>;
