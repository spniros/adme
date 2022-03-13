import { Action } from '@ngrx/store';
import { Video } from '../../entity/videos';

export enum SelectActionType {
  SELECT_ITEM = '[video] Select Video',
}
export class SelectItemAction implements Action {
    
  readonly type = SelectActionType.SELECT_ITEM;
  //add an optional payload
  
 constructor(public payload: Video) {}
}
export type VideoAction = SelectItemAction;