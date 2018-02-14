import React from 'react';
import './marker.css'

class Marker extends React.Component {
  render() {
    let classes = "marker";

    if (this.props.selected) {
      classes += " marker-selected";
    }

    return (
      <div className={classes}>
        {this.props.text}
      </div>
    )
  }
}

export default Marker;
