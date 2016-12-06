import React, { Component, PropTypes } from 'react'

import './section.less'

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="section">
        <div className="section-title">{ this.props.title }</div>
        { this.props.subtitle &&
          <div className="section-subtitle">{ this.props.subtitle }</div>
        }
        <div className="section-content">{ this.props.content }</div>
      </div>
    )
  }
}
