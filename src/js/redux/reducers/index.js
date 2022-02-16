import { combineReducers } from 'redux';
import { productReducer } from "./productReducer";
import {courseReducer} from "./courseReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  course: courseReducer
});



