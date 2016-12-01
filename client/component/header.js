import React, { Component } from 'react'

import './header.less'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: React.PropTypes.string
  }

  render() {
    return (
      <div className="header">
        { this.props.title }
      </div>
    )
  }
}
