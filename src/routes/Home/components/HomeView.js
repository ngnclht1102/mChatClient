import React from 'react'
import { Row, Col, Input, Button, Form } from 'antd'
import t from 'tcomb-form'
import { ChatFeed } from 'react-chat-ui'
import './HomeView.scss'

const FormSchema = t.struct({
  message: t.String
})


class HomeView extends React.Component {

  constructor (props) {
    super(props)

    this.onSendMessage = this.onSendMessage.bind(this)
  }

  onSendMessage (event) {
    event.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      const { chatSendRequest } = this.props
      chatSendRequest(value.message)
    } else {
      alert('can\'t send empty message')
    }
  }
  render () {
    return (
      <div>
        <Row>
          <ChatFeed
            messages={this.props.chatHistory}
            isTyping={false}
            hasInputField={false}
            bubblesCentered={false}
            bubbleStyles={{
              text: {
                fontSize: 12
              },
              chatbubble: {
                borderRadius: 20,
                padding: 10
              }
            }}
          />
        </Row>

        <form onSubmit={this.onSendMessage}>
          <t.form.Form ref="form" type={FormSchema} />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    )
  }
}

HomeView.propTypes = {
  chatHistory: React.PropTypes.array.isRequired,
  chatSendRequest : React.PropTypes.func.isRequired
}


export default HomeView
