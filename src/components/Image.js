import React from 'react';

class Image extends React.Component {

  render() {
    return (
      <a href={this.props.url} target="_blank">
        <img src={this.props.source} alt='' />
      </a>
    );
  }
}

export default Image;