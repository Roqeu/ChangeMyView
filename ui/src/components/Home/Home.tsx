import React from 'react';
import './Home.css'
import "antd/dist/antd.css";
import { Layout } from 'antd'
import { Header } from './Header';
import { RoomList } from './RoomList';

const { Content } = Layout

export class Home extends React.Component {

    

    render() {

        return (
            <Layout className="Home">
                <Content className="main-home" style={{margin: '24px 16px 0', height: "90vh", overflow: "hidden"}}>
                    <Header />
                    <RoomList />
                </Content>
            </Layout>
        )
    }
}