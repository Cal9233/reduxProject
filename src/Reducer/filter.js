import { FILTER_COLOR, FILTER_STATUS } from "../Action/action-types";

const initialState = {
  filter: [
    {
      color: [],
      status: ""
    }
  ]
}

const filterReducer = (state = initialState, action) => {
  switch (action.type){
    case FILTER_STATUS: {
      return {
        ...state,
        status: action.payload
      }
    }
    case FILTER_COLOR: {
      return {
        ...state,
        color: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default filterReducer;