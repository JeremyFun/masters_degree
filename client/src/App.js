import React, {useState} from 'react'
import {Col, Layout, Menu, Row} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import "./App.css"
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

const {Header, Sider, Content} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false)

    let toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Navbar/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Row>
                        <Col span={12} offset={4}>
                            <Register />
                        </Col>
                    </Row>
                    {/*<Login />*/}
                    {/*<iframe className="iframe"*/}
                    {/*    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVTxHueeBJXqOB5puY6dUkeo9jz9oGK4wk-jsFhitoY4Ojg-BDP9ktPoHhd0yJa-Io3a48xmiqvSht/pubhtml?widget=true&amp;headers=false"/>*/}
                </Content>
            </Layout>
        </Layout>
    );
}

export default App
