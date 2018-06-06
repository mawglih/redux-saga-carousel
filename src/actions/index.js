import { NEXT_SLIDE, PREV_SLIDE } from './types';
export const nextSlide = (index) => {
    return {
      type: NEXT_SLIDE,
      payload: length,
    };
}
export const prevSlide = (index) => {
    return {
      type: PREV_SLIDE,
      payload: length,
    };
}
