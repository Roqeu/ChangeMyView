import { Button, Col, Divider, Input, Radio, RadioChangeEvent, Row } from "antd"
import React from "react"

interface HeaderState {

    topic: string,
    stance: string,
    agree: boolean
}

export class Header extends React.Component<any, HeaderState> {

    constructor(props) {
        super(props)

        this.state = {
            topic: '',
            stance: '',
            agree: false
        }

        this.saveStance = this.saveStance.bind(this)
        this.saveTopic = this.saveTopic.bind(this)
        this.savePartnerType = this.savePartnerType.bind(this)
    }
    
    private saveTopic(topic: string) {
        
        console.log('topic: ', topic)
    }

    private saveStance(stance: string) {

        console.log('stance: ', stance)
    }

    
    private savePartnerType(type: boolean) {

        console.log('type: ', type)
    }

    render() {

        return(
            <div className="search-bar">
                <br></br>
                <Row gutter={50}>
                    <Col span={6} offset={2}>
                        What do you want to talk about?
                        <Input
                            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {this.saveTopic(event.target.value)}}
                            value={this.state.topic}
                        />
                    </Col>
                    <Col span={6}>  
                        What stance do you want to take?                      
                        <Input
                            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {this.saveStance(event.target.value)}}
                            value={this.state.topic}
                        />
                    </Col>
                    <Col span={6}>
                        <br></br>
                        Do you want your partner to agree or disagree?
                        &nbsp;&nbsp;
                        <Radio.Group buttonStyle="solid" optionType="button" onChange={(event: RadioChangeEvent) => {this.savePartnerType(event.target.value)}}>
                            <Radio.Button value="true">Agree</Radio.Button>
                            <Radio.Button value="false">Disagree</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Col span={1}>
                        <br></br>
                        <Button type="primary">Create Room</Button>
                    </Col>
                </Row>
                <Divider />
            </div>
        )
    }
}