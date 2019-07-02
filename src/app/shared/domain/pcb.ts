import {PCBStateEnum} from './enum';
import {Other} from './other';

export interface PCB {

  id?: number;

  name?: string;

  priority?: number;

  ranTime?: number;

  createTime?: number;

  finishTime?: number;

  requiredTime?: number;

  firstCallTime?: number;

  state?: PCBStateEnum;

  other?: Other;

}
