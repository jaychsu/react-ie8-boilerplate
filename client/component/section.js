import React, { Component } from 'react'

import './section.less'

export default class Section extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    content: React.PropTypes.instanceOf(Component).isRequired
  }

  render() {
    return (
      <div className="section">
        <div className="section-title">{ this.props.title }</div>
        { this.props.subtitle &&
          <div className="section-subtitle">{ this.props.subtitle }</div>
        }
        { this.props.content }
      </div>
    )
  }
}
