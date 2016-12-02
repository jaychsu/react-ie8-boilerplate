import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

import './sidebar.less'

export default class SideBar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      current: ''
    }
  }

  handleClick(e) {
    console.log('click: ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <div className="sidebar">
        <Link to="/home"
          onClick={ e => this.setState({ current: '' }) }
        >
          <div className="logo">
            Autodesk
          </div>
        </Link>
        <Menu
          onClick={ this.handleClick }
          defaultOpenKeys={['product']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="profile">
            <Link to="/profile"
              className="sidebar-item"
            >
              <Icon type="appstore" /><span>MY PROFILE</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="payment">
            <Link to="/payment"
              className="sidebar-item"
            >
              <Icon type="appstore" /><span>PAYMENT</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="communication">
            <Link to="/communication"
              className="sidebar-item"
            >
              <Icon type="appstore" /><span>COMMUNICATIONS</span>
            </Link>
          </Menu.Item>
          <SubMenu key="product"
            title={
              <Link to="/product"
                className="sidebar-item"
              >
                <Icon type="appstore" /><span>Products</span>
              </Link>
            }
            onTitleClick={ this.handleClick }
            disabled={ true }
          >
            <Menu.Item key="pixlr">
              <Link to="/product/pixlr"
                className="sidebar-item"
              >
                PIXLR
              </Link>
            </Menu.Item>
            <Menu.Item key="sketchbook">
              <Link to="/product/sketchbook"
                className="sidebar-item"
              >
                SKETCHBOOK
              </Link>
            </Menu.Item>
            <Menu.Item key="more">
              <Link to="/product/more"
                className="sidebar-item"
              >
                EXPLORE MORE...
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
