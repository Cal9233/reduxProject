import { FILTER_COLOR, FILTER_STATUS } from "./action-types";

export const filterColor = (color) => {
  return async dispatch => {
    dispatch({
      type: FILTER_COLOR,
      payload: color
    })
  }
}

export const filterStatus = (status) => {
  return async dispatch => {
    dispatch({
      type: FILTER_STATUS,
      payload: status
    })
  }
}