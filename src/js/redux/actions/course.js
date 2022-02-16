import {ActionTypes} from "../constants/course";
import {api} from "../../config/anxios";

export const searchCourse = (request) => async (dispatch) => {
  let url = `/api/course/search`;
  await dispatch({
    type: ActionTypes.SEARCH_COURSE,
    payload: await api.post(url, request),
  });
};