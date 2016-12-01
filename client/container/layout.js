import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        I am Layout
        {
          this.props.children && React.cloneElement(this.props.children, { parent: this })
        }
      </div>
    )
  }
}
