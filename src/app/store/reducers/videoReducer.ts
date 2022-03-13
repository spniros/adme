// import the interface
// import { CourseItem } from '../models/courseItem.model';
// import { CourseAction, CourseActionType } from '../actions/course.action';

import { SelectActionType, VideoAction } from "../action/constants";
import { Video } from "../../entity/videos";

//create a dummy initial state

const initialState: Video = {
    id: "",
    description: "",
    sources: [],
    subtitle: "",
    title: ""
};

export function videoReducer(  state: Video = initialState, action: any) {
    switch (action.type) {
        case SelectActionType.SELECT_ITEM:
            return {...state,...action.payload};
        default:
            return state;
    }
}