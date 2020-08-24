import React, { Component } from 'react';
class LeftArrow extends Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <i className='left' aria-hidden='true'></i>
      </div>
    )
  }
}
export default LeftArrow;