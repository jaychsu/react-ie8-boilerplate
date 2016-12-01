import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Product: { this.props.params.pname }
      </div>
    )
  }
}
