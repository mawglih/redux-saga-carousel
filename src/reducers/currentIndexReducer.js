import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  currentIndex: 0,
  currentIndex1: 1,
  currentIndex2: 2,
  currentIndex3: 3,
}
export default (state = INITIAL_STATE, action) => {

  // console.log("last index", lastIndex);
  // console.log("length Reducer", action.length);
  // console.log("payload reducer", action.payload);
  switch (action.type) {
    // const lastIndex = action.length - 1;
    case actionTypes.NEXT_SLIDE:
    // console.log("last index", lastIndex);
    // console.log("length Reducer", action.length);
    // console.log("payload reducer", action.payload);

      return {
        ...state,
        currentIndex: state.currentIndex === action.length - 1 ? 0 : state.currentIndex + 1,
        currentIndex1: state.currentIndex1 === action.length - 1 ? 0 : state.currentIndex1 + 1,
        currentIndex2: state.currentIndex2 === action.length - 1 ? 0 : state.currentIndex2 + 1,
        currentIndex3: state.currentIndex3 === action.length - 1 ? 0 : state.currentIndex3 + 1,
      };
    case actionTypes.PREV_SLIDE:
      return {
        ...state,
        currentIndex: state.currentIndex === 0 ? action.length - 1 : state.currentIndex - 1,
        currentIndex1: state.currentIndex1 === 0 ? action.length - 1 : state.currentIndex1 - 1,
        currentIndex2: state.currentIndex2 === 0 ? action.length - 1 : state.currentIndex2 - 1,
        currentIndex3: state.currentIndex3 === 0 ? action.length - 1 : state.currentIndex3 - 1,
      };
    default:
      return state;
  }
}
