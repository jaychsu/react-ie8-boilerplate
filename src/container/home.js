import React, { Component } from 'react'
import {
  Experiment,
  Variant,
  emitter,
} from 'react-ab-test'

import Header from 'component/header'
import Section from 'component/section'

emitter.defineVariants('ABTest', ['A', 'B', 'C'], [10, 40, 40])

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Homepage" />
        <Experiment name="ABTest">
          <Variant name="A">
            <Section
              title="Section A"
              content={ <div /> }
            />
          </Variant>
          <Variant name="B">
            <Section
              title="Section B"
              content={ <div /> }
            />
          </Variant>
          <Variant name="C">
            <Section
              title="Section C"
              content={ <div /> }
            />
          </Variant>
        </Experiment>
      </div>
    )
  }
}
