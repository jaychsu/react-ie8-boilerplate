import React, { Component } from 'react'
import Header from 'component/header'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header title="Profile" />
    )
  }
}
