import React from 'react';
import './App.css'
import { Layout } from 'antd'
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { ChatRoom } from './components/ChatRoom/ChatRoom';

const { Header, Content } = Layout

const headerStyle = {

    background: "white", 
    fontSize: "calc(10px + 2vmin)", 
    boxShadow: "1px 5px 5px lightgray", 
    height: "10vh"
}

export default class App extends React.Component {


    render() {
      return (
        <Layout style={{overflow: "hidden"}}>
            <Header className="header" style={headerStyle}>
                Change My View
            </Header>
            <Content style={{height: "90vh"}}>
                <BrowserRouter>
                    <Route path="/room" component={ChatRoom}>
                    </Route>
                    <Route path="/" component={Home}>
                    </Route>
                </BrowserRouter>
            </Content>
        </Layout>
      )
    }
}