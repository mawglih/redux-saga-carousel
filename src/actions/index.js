import { NEXT_SLIDE, PREV_SLIDE } from './types';
export const nextSlide = (length) => {
    return {
      type: NEXT_SLIDE,
      payload: length,
    };
}
export const prevSlide = (length) => {
    return {
      type: PREV_SLIDE,
      payload: length,
    };
}
