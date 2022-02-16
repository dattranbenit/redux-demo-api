import { ActionTypes } from "../constants/course";

const initialState = {
  listCourses: {},
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_COURSE: {
      // console.log(action.payload)
      return {
        ...state,
        listCourses: action.payload.data
      }
    }
  }
  return state;
}



