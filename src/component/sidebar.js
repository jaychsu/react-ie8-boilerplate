import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'

const { SubMenu, MenuItemGroup } = Menu

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
        <Link to="/home" onClick={ e => this.setState({ current: '' }) }>
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
            <Link to="/profile"><Icon type="appstore" /><span>MY PROFILE</span></Link>
          </Menu.Item>
          <Menu.Item key="payment">
            <Link to="/payment"><Icon type="appstore" /><span>PAYMENT</span></Link>
          </Menu.Item>
          <Menu.Item key="communication">
            <Link to="/communication"><Icon type="appstore" /><span>COMMUNICATIONS</span></Link>
          </Menu.Item>
          <SubMenu key="product" title={
            <span><Icon type="appstore" /><span>Products</span></span>
          }>
            <Menu.Item key="pixlr">
              <Link to="/product/pixlr">PIXLR</Link>
            </Menu.Item>
            <Menu.Item key="sketchbook">
              <Link to="/product/sketchbook">SKETCHBOOK</Link>
            </Menu.Item>
            <Menu.Item key="more">
              <Link to="/product/more">EXPLORE MORE...</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
