import React, { Component } from 'react'
import { Row, Col } from 'antd'

import SideBar from 'component/sidebar'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app-container">
        <Row>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={20} id="app-content">
            {
              this.props.children && React.cloneElement(this.props.children, { parent: this })
            }
          </Col>
        </Row>
      </div>
    )
  }
}
