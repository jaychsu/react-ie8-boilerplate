import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'

const { SubMenu, MenuItemGroup } = Menu

export default class SideBar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      current: 'profile'
    }
  }

  handleClick(e) {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <div className="sidebar">
        <div
          className="logo"
        >Autodesk</div>
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
            <Link to="/product"><Icon type="appstore" /><span>Products</span></Link>
          }>
            <Menu.Item key="product1">PIXLR</Menu.Item>
            <Menu.Item key="product2">SKETCHBOOK</Menu.Item>
            <Menu.Item key="product3">EXPLORE MORE...</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
