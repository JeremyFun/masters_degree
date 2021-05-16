import React, {useState} from 'react'
import {Col, Layout, Menu, Row} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined
} from '@ant-design/icons';
import "./App.css"
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.css';

const {Header, Sider, Content} = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false)

    let toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <BrowserRouter>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Navbar/>
                </Sider>
                <Layout className="site-layout">
                    <Row>
                        <Col span={19}></Col>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{backgroundColor: "#EFEFEF"}}>
                            <Menu.Item key="1"><LogoutOutlined/>Logout</Menu.Item>
                            <Menu.Item key="2"><LoginOutlined/>Login</Menu.Item>
                            <Menu.Item key="3"><UserAddOutlined/>Register</Menu.Item>
                        </Menu>
                    </Row>
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
                        <Switch>
                            <Route path="/" exact>
                                <HomePage/>
                            </Route>
                            <Col span={12} offset={4}>
                                <Route path="/register" exact>
                                    <RegisterPage/>
                                </Route>
                                <Route path="/login">
                                    <LoginPage/>
                                </Route>
                            </Col>
                        </Switch>
                        {/*<Row>*/}

                        {/*        <RegisterPage/>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                        {/*<LoginPage />*/}
                        {/*<iframe className="iframe"*/}
                        {/*    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVTxHueeBJXqOB5puY6dUkeo9jz9oGK4wk-jsFhitoY4Ojg-BDP9ktPoHhd0yJa-Io3a48xmiqvSht/pubhtml?widget=true&amp;headers=false"/>*/}
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default App
