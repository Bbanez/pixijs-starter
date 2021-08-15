import { Animatable } from '../animatable';
import { DefaultModelInputs } from './defaults';

export interface CircleConfig extends DefaultModelInputs {
  size: number;
}

export type Circle = Animatable<CircleConfig>;
