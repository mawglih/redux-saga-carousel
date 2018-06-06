import React, { Component, Children, cloneElement, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/types';
import Item from '../Item';
import Arrow from '../Arrow';

class Carousel extends Component {
  //   this.state = {
  //     currentIndex: 0,
  //     currentIndex1: 1,
  //     currentIndex2: 2,
  //     currentIndex3: 3,
  //   }
  //   this.previousSlide = this.previousSlide.bind(this);
  //   this.nextSlide = this.nextSlide.bind(this);
  // }
  // previousSlide() {
  //   const lastIndex = this.props.length - 1;
  //   const index = this.state.currentIndex === 0 ? lastIndex : this.state.currentIndex - 1;
  //   const index1 = this.state.currentIndex1 === 0 ? lastIndex : this.state.currentIndex1 - 1;
  //   const index2 = this.state.currentIndex2 === 0 ? lastIndex : this.state.currentIndex2 - 1;
  //   const index3 = this.state.currentIndex3 === 0 ? lastIndex : this.state.currentIndex3 - 1;
  //   this.setState({
  //     currentIndex: index,
  //     currentIndex1: index1,
  //     currentIndex2: index2,
  //     currentIndex3: index3,
  //   });
  // }
  // nextSlide() {
  //   const lastIndex = this.props.length - 1;
  //   const index = this.state.currentIndex === lastIndex ? 0 : this.state.currentIndex + 1;
  //   const index1 = this.state.currentIndex1 === lastIndex ? 0 : this.state.currentIndex1 + 1;
  //   const index2 = this.state.currentIndex2 === lastIndex ? 0 : this.state.currentIndex2 + 1;
  //   const index3 = this.state.currentIndex3 === lastIndex ? 0 : this.state.currentIndex3 + 1;
  //   this.setState({
  //     currentIndex: index,
  //     currentIndex1: index1,
  //     currentIndex2: index2,
  //     currentIndex3: index3,
  //   });
  // }

  render() {
    console.log("initial state", this.props);
    const {
      length,
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
const mapStateToProps = state => {
  console.log("mapState", state);
  return {
    currentIndex: state.currentIndex,
    currentIndex1: state.currentIndex1,
    currentIndex2: state.currentIndex2,
    currentIndex3: state.currentIndex3,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onPreviousSlide: () => dispatch({type: actionTypes.PREV_SLIDE, length:10}),
    onNextSlide: () => dispatch({type: actionTypes.NEXT_SLIDE, length:10})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
