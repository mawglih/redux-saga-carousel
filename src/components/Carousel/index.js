import React, { Component, Children, cloneElement, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/types';
import Item from '../Item';
import Arrow from '../Arrow';

class Carousel extends Component {
  render() {
    console.log("initial state", this.props);
    const {
      children,
      arrowColor,
      onNextSlide,
      onPreviousSlide,
      currentIndex,
    } = this.props;

    const childrenWithExtraProps = Children.map(children, child => {
      console.log("child1", currentIndex);
      return cloneElement(child,{
        index: currentIndex.currentIndex,
      });
    });
    const childrenWithExtraProps1 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex.currentIndex1,
      });
    });
    const childrenWithExtraProps2 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex.currentIndex2,
      });
    });
    const childrenWithExtraProps3 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex.currentIndex3,
      });
    });

    return(
    <Fragment>
      <Arrow arrowColor={arrowColor} direction="left" click={onNextSlide} />
      <Item>
        {childrenWithExtraProps}
      </Item>
      <Item>
        {childrenWithExtraProps1}
      </Item>
      <Item>
        {childrenWithExtraProps2}
      </Item>
      <Item>
        {childrenWithExtraProps3}
      </Item>
      <Arrow arrowColor={arrowColor} direction="right" click={onPreviousSlide} />
    </Fragment>
  );
}
}
const mapStateToProps = (state, props) => {
  console.log("mapState", state);
  return {
    length: props.length,
    currentIndex: state.currentIndex,
    currentIndex1: state.currentIndex1,
    currentIndex2: state.currentIndex2,
    currentIndex3: state.currentIndex3,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onPreviousSlide: () => dispatch({type: actionTypes.PREV_SLIDE, length: props.length}),
    onNextSlide: () => dispatch({type: actionTypes.NEXT_SLIDE, length: props.length})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
