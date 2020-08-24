import React, { Component } from 'react';
class RightArrow extends Component {
  render() {
    return(
      <div className='forwardArrow' onClick={this.props.goToNextSlide}>
        <i className='right' aria-hidden='true'></i>
      </div>
    )
  }
}
export default RightArrow;