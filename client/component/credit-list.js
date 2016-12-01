import React, { Component } from 'react'
import {
  Card,
  Col,
  Row,
  Modal,
  Button
} from 'antd'

import './credit-list.less'

export default class CreditList extends Component {
  constructor(props) {
    super(props)

    this.renderMembership = this.renderMembership.bind(this)
    this.renderCreditCard = this.renderCreditCard.bind(this)
    this.renderActions = this.renderActions.bind(this)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

    this.state = {
      isModalVisible: false,
      modalTitle: '',
      modalContent: '',
      modalOkText: '',
      modalCancelText: '',
    }
  }

  static propTypes = {
    dataSource: React.PropTypes.array
  }

  render() {
    return (
      <div className="credit-list">
        <Row>
          { this.props.dataSource.map((data, index) => this.renderCreditCard(data, index)) }
        </Row>
        <Modal
          title={ this.state.modalTitle }
          okText={ this.state.modalOkText }
          cancelText={ this.state.modalCancelText }
          visible={ this.state.isModalVisible }
          onOk={ this.handleOk }
          onCancel={ this.handleCancel }
        >
          <p>{ this.state.modalContent }</p>
        </Modal>
      </div>
    )
  }

  renderCreditCard(data, index) {
    return (
      <Col span="8">
        <div className="credit-card"><Card title={ `CARD ${index+1}` }>
          <div className="credit-main clearfix">
            <span className="pull-left">
              { `**** ${data.cardid.slice(-4)}` }
            </span>
            <span className="pull-right">
              { `Exp. ${data.expiration}` }
            </span>
          </div>
          <div className="credit-other">
            <div>
              <h4>LINKED MEMBERSHIPS:</h4>
              <p>
                { data.memberships.map((membership, index) => this.renderMembership(membership, index)) }
              </p>
              { this.renderActions(index) }
            </div>
          </div>
        </Card></div>
      </Col>
    )
  }

  renderMembership(membership, index) {
    return <span>{[
      index === 0 ? '' : ',',
      membership
    ].join(' ')}</span>
  }

  renderActions(index) {
    return (
      <div className="credit-action">
        <Button
          type="ghost"
          onClick={ this.handleDelete }
        >
          Delete
        </Button>
        <Button
          type="ghost"
          onClick={ this.handleUpdate }
        >
          Update
        </Button>
      </div>
    )
  }

  handleDelete() {
    console.log('show delete!')
    this.setState({
      isModalVisible: true,
      modalTitle: 'Delete this Credit Card?',
      modalContent: 'Are you sure you want to delete this card from your account? This card will no longer be listed as a Payment Source.',
      modalOkText: 'DELETE',
      modalCancelText: 'CLOSE'
    })
  }

  handleUpdate() {
    console.log('show update!')
    this.setState({
      isModalVisible: true,
      modalTitle: 'Update what?',
      modalContent: 'Blah BlahBlahBlah BlahBlah Blah BlahBlahBlah BlahBlah Blah BlahBlahBlah BlahBlah.',
      modalOkText: 'UPDATE',
      modalCancelText: 'CLOSE'
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
}
