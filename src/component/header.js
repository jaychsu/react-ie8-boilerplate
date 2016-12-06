import React, { Component, PropTypes } from 'react'

import './header.less'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  }

  render() {
    return (
      <div className="header">
        { this.props.title }
      </div>
    )
  }
}
