import React, { Component, PropTypes } from 'react'

import Header from 'component/header'
import Section from 'component/section'

export default class Product extends Component {
  static propTypes = {
    params: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <Header title={ `${this.props.params.pname} Settings` } />
        <Section
          title="Membership Information"
          content={ <div /> }
        />
        <Section
          title="Download My Software"
          subtitle="Looking for your software? Download this app for different devices."
          content={ <div /> }
        />
        <Section
          title="Pixlr Transaction History"
          content={ <div /> }
        />
      </div>
    )
  }
}
