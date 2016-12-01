import React, { Component } from 'react'
import Header from 'component/header'

export default class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header title={ `Product: ${this.props.params.pname}` } />
      </div>
    )
  }
}
