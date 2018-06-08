function* slide(action) {
  yield setTimeout() {

  }
}

export const nextSlide = (length) => {
    return {
      type: NEXT_SLIDE,
      payload: length,
    };
}
