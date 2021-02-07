import { Button, Col, Input, Row } from "antd";
import Layout from "antd/lib/layout";
import React from "react";
import { Socket, io } from "socket.io-client";

const ENDPOINT = 'http://localhost:3002'

const { Content, Footer } = Layout

interface User {

    id: number,
    userName: string,
    room: string
}

interface ChatRoomState {

    // user: User,
    users: User[],
    topic: string,
    message: string,
    socket: Socket | undefined,
    modal: boolean
}

export class ChatRoom extends React.Component<any, ChatRoomState> {

    constructor(props){
        super(props)

        this.state ={ 

            // user: 
            users: [],
            topic: '',
            message: '',
            socket: undefined,
            modal: true
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

    joinRoom() {

        let socket = io(ENDPOINT)

        socket.emit('joinRoom', undefined, undefined)
        socket.on('roomUsers', data =>{

            console.log(data)
            this.setState({

                modal: false,
                socket: socket,
                users: data.users,

            })
        })
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

            <Modal>

                
            </Modal>
            </>
        )
    }
}