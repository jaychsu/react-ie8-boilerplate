import React, { Component } from 'react'
import {
  Table,
  Modal,
  Button,
} from 'antd'

import Header from 'component/header'
import Section from 'component/section'
import CreditList from 'component/credit-list'

import {
  transactions,
  credits,
} from 'api/mock'

export default class Payment extends Component {
  constructor(props) {
    super(props)

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

    this.state = {
      isModalVisible: false,
    }
  }

  showModal() {
    this.setState({ isModalVisible: true })
  }

  handleOk() {
    this.setState({ isModalVisible: false })
  }

  handleCancel() {
    this.setState({ isModalVisible: false })
  }

  render() {
    return (
      <div>
        <Header title="Payment" />
        <Section
          title="Payment Methods"
          subtitle="What you purchased and how you paid"
          content={
            <CreditList dataSource={ credits } />
          }
        />
        <Section
          title="Transaction History"
          content={
            <Table
              dataSource={ transactions }
              columns={ [{
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
              }, {
                title: 'Order',
                dataIndex: 'order',
                key: 'order',
              }, {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
              }, {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
              }, {
                title: 'Invoice',
                dataIndex: 'invoice',
                key: 'invoice',
                render: () => (
                  <Button type="ghost" onClick={ this.showModal }>View</Button>
                ),
              }] }
            />
          }
        />
        <Modal
          title="App Store Transaction"
          okText="LAUNCH APP STORE"
          cancelText="CLOSE"
          visible={ this.state.isModalVisible }
          onOk={ this.handleOk }
          onCancel={ this.handleCancel }
        >
          <p>
            This purchase was made through the App Store.
            Please login through the App Store to see your transaction details.
          </p>
        </Modal>
      </div>
    )
  }
}
