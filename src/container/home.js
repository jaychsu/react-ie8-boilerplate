import React, { Component } from 'react'
import Header from 'component/header'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header title="Homepage" />
    )
  }
}