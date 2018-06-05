import { NEXT_SLIDE, PREV_SLIDE } from './types';
const lastIndex = 9;
export const nextSlide = (index) => {
  if(index === lastIndex) {
    return {
      type: NEXT_SLIDE,
      payload: 0
    };
  } else {
    return {
      type: NEXT_SLIDE,
      payload: index + 1,
    };
  }
}
export const prevSlide = (index) => {
  if(index === 0) {
    return {
      type: PREV_SLIDE,
      payload: lastIndex
    };
  } else {
    return {
      type: PREV_SLIDE,
      payload: index - 1,
    };
  }
}
