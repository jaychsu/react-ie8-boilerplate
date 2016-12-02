import React, { Component } from 'react'

import './header.less'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ])
  }

  render() {
    return (
      <div className="header">
        { this.props.title }
      </div>
    )
  }
}
