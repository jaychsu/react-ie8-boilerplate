import React, { Component } from 'react'
import {
  Table,
  Modal,
  Button
} from 'antd'

import Header from 'component/header'
import Section from 'component/section'

export default class Payment extends Component {
  constructor(props) {
    super(props)

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

    this.state = {
      isModalVisible: false
    }
  }

  showModal() {
    console.log('show modal!')
    this.setState({
      isModalVisible: true
    })
  }

  handleOk(e) {
    console.log('clicked ok!')
    this.setState({
      isModalVisible: false
    })
  }

  handleCancel(e) {
    console.log('clicked cancel!')
    this.setState({
      isModalVisible: false
    })
  }

  render() {
    return (
      <div>
        <Header title="Payment" />
        <Section
          title="Payment Methods"
          subtitle="What you purchased and how you paid"
        />
        <Section
          title="Transaction History"
          content={
            <Table
              dataSource={ dataSource }
              columns={[{
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
                render: (text, record, index) => {
                  return <Button type="ghost" onClick={ this.showModal }>View</Button>
                }
              }]}
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
          <p>This purchase was made through the App Store. Please login through the App Store to see your transaction details.</p>
        </Modal>
      </div>
    )
  }
}

const dataSource = [{
  key: 0,
  date: 'Jan 1, 2016',
  order: 'SketchBook.com::#21321412',
  status: 'Completed',
  amount: 128.24
}, {
  key: 1,
  date: 'Jan 1, 2016',
  order: 'Pixlr.com::#134313135',
  status: 'Pending',
  amount: 28.24
}, {
  key: 2,
  date: 'Dec 1, 2015',
  order: 'Graphic.com::#1356361',
  status: 'Shipped',
  amount: 28.24
}]
