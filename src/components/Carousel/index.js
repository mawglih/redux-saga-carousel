import React, { Component, Children, cloneElement, Fragment } from 'react';
import Item from '../Item';
import Arrow from '../Arrow';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentIndex1: 1,
      currentIndex2: 2,
      currentIndex3: 3,
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = this.props.length - 1;
    const index = this.state.currentIndex === 0 ? lastIndex : this.state.currentIndex - 1;
    const index1 = this.state.currentIndex1 === 0 ? lastIndex : this.state.currentIndex1 - 1;
    const index2 = this.state.currentIndex2 === 0 ? lastIndex : this.state.currentIndex2 - 1;
    const index3 = this.state.currentIndex3 === 0 ? lastIndex : this.state.currentIndex3 - 1;
    this.setState({
      currentIndex: index,
      currentIndex1: index1,
      currentIndex2: index2,
      currentIndex3: index3,
    });
  }
  nextSlide() {
    const lastIndex = this.props.length - 1;
    const index = this.state.currentIndex === lastIndex ? 0 : this.state.currentIndex + 1;
    const index1 = this.state.currentIndex1 === lastIndex ? 0 : this.state.currentIndex1 + 1;
    const index2 = this.state.currentIndex2 === lastIndex ? 0 : this.state.currentIndex2 + 1;
    const index3 = this.state.currentIndex3 === lastIndex ? 0 : this.state.currentIndex3 + 1;
    this.setState({
      currentIndex: index,
      currentIndex1: index1,
      currentIndex2: index2,
      currentIndex3: index3,
    });
  }

  render() {
    const {children, arrowColor} = this.props;

    const {
      currentIndex,
      currentIndex1,
      currentIndex2,
      currentIndex3,
    } = this.state;
    const childrenWithExtraProps = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex,
      });
    });
    const childrenWithExtraProps1 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex1,
      });
    });
    const childrenWithExtraProps2 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex2,
      });
    });
    const childrenWithExtraProps3 = Children.map(children, child => {
      return cloneElement(child,{
        index: currentIndex3,
      });
    });

    return(
    <Fragment>
      <Arrow arrowColor={arrowColor} direction="left" click={this.nextSlide} />
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
      <Arrow arrowColor={arrowColor} direction="right" click={this.previousSlide} />
    </Fragment>
  );
}
}
export default Carousel;
