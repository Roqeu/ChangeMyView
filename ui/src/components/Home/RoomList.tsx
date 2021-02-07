import { Button, Col, Row } from "antd";
import React from "react";
import './Rooms.css'
import sampleData from '../../data/sampleRooms.json';
import { Socket } from "socket.io-client";

interface Room {

    topic: string,
    stance: string,
    lookingFor: boolean
}

interface RoomListState {
    rooms: Room[]
}

interface RoomListProps {

    socket: Socket
}

export class RoomList extends React.Component<any, RoomListState> {

    constructor(props){
        super(props)

        this.state = {
            
            rooms: sampleData.rooms
        }

        this.joinRoom = this.joinRoom.bind(this)
    }

    joinRoom(event: any) {

        console.log(event.target.value)

        window.location.href = '/room'
    }

    render() {
        return(
            <div className="room-list">
                <br></br>
                <Row gutter={4}>
                    <Col span={6} offset={2} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                        Room Topic
                    </Col>
                    <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                        Room Stance
                    </Col>
                    <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                        Looking for someone who
                    </Col>
                    <Col span={2} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                    </Col>
                </Row>
                <br></br>
                <div style={{overflowY: "scroll", overflowX: "hidden", height: "73vh"}}>
                    {this.getRooms()}
                </div>
            </div>
        )
    }

    getRooms(){

        return this.state.rooms.map((room, idx) => {
            return(
                <div className={`room${idx%2}`}>
                    <br></br>
                    <Row gutter={4}>
                        <Col span={6} offset={2} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            {room.topic}
                        </Col>
                        <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            {room.stance}
                        </Col>
                        <Col span={6} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            {room.lookingFor? "Agree" : "Disagree" }
                        </Col>
                        <Col span={2} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button type="primary" value={`room${idx}`} onClick={this.joinRoom}>Join Room</Button>
                        </Col>
                    </Row>
                    <br></br>
                </div>
            )
        })
    }
}