import { Button, Col, Input, Row } from "antd";
import Layout from "antd/lib/layout";
import React from "react";
import { Redirect } from 'react-router-dom'

const { Content, Footer } = Layout

interface ChatRoomState {

    userId: string,
    message: string
}

export class ChatRoom extends React.Component<any, ChatRoomState> {

    constructor(props){
        super(props)

        this.state ={ 

            userId: '',
            message: ''
        }

        this.leaveRoom = this.leaveRoom.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
    }

    
    leaveRoom() {

        console.log('leaving')
        window.location.href = '/'
    }

    sendMessage() {

        
    }

    updateMessage(message: string) {

        this.setState({
            message
        })
    }

    render() {

        return (
            <>
            <Content style={{height: "80vh"}}>
                <br></br>
                <Row>
                    <Col offset={22}>
                        <Button type="primary" style={{background: "blue", border: "blue"}} onClick={this.leaveRoom}>Leave Room</Button>
                    </Col>
                </Row>
                <Row>
                    {/* Where chat will go */}
                </Row>
            </Content>
            <Footer>
                <Row gutter={20}>
                    <Col span={20} offset={2}>
                        <Input
                            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {this.updateMessage(event.target.value)}}
                        />
                    </Col>
                    <Col span={2}>
                        <Button type="primary" onClick={this.sendMessage}>Send</Button>
                    </Col>
                </Row>
            </Footer>
            </>
        )
    }
}