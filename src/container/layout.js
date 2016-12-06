import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'antd'

import SideBar from 'component/sidebar'

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <Row id="app-container">
        <Col span={ 4 }>
          <SideBar />
        </Col>
        <Col span={ 20 } id="app-content">
          {
            this.props.children && React.cloneElement(this.props.children, { parent: this })
          }
        </Col>
      </Row>
    )
  }
}
