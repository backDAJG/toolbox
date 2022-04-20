import { SET_FILES } from './actions';

const initialState = {
  files: [],
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.data };
    default:
      return state;
  }
};

export default filesReducer;
