import React, {useEffect, useState} from 'react'
import {Col, Layout, Menu, Row, Modal, Button, Form, Input, InputNumber, Tooltip, notification} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, ForkOutlined, SmileOutlined
} from '@ant-design/icons';
import "./App.css"
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter, Switch, Route, NavLink, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./redux/actions/userActions";
import TableInstitute from "./pages/TableInstitute";
import emailjs from "emailjs-com"
import TableKafedra from "./pages/TableKafedra";
import DocumentationPage from "./pages/DocumentationPage";
import AdminPage from "./pages/AdminPage";

const {Header, Sider, Content} = Layout;

const App = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [collapsed, setCollapsed] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {

        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setName('')
        setEmail('')
        setMessage('')
        alert('ok')
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const openNotification = (error) => {
        notification.open({
            message: error,
            icon: <SmileOutlined style={{color: '#108ee9'}}/>,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    let toggle = () => {
        setCollapsed(!collapsed)
    }
    const layout = {
        labelCol: {span: 6},
        wrapperCol: {span: 16},
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values) => {
        console.log(values);
    };
    const onChange = e => {
        console.log(e.target.defaultValue);
    };

    let sendEmail = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || message === '') {
            openNotification("Ви не заповнили усі поля")
        } else {
            emailjs.sendForm('service_bggw1xm', 'template_h673tdk', e.target, 'user_6NjflCTTQtRUzEY5ZalhR')
                .then((result) => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    openNotification("Дякуємо за ваш відгук")
                })
                .catch(err => {
                    openNotification("У вас проблеми з інтернетом")
                })
            handleCancel()
        }
    }
    return (
        <BrowserRouter>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{background: "cadetblue"}}>
                    <Navbar/>
                </Sider>
                <Layout className="site-layout">
                    <Row>
                        <Col span={19}></Col>
                        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}
                              style={{backgroundColor: "#EFEFEF"}}>
                            {userInfo ? <Menu.Item key="1" onClick={() => dispatch(logout())}><LogoutOutlined/>
                                    Вихід
                                </Menu.Item> :
                                <>
                                    <Menu.Item key="2"><LoginOutlined/>
                                        <NavLink to="/login">Вхід</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="3"><UserAddOutlined/>
                                        <NavLink to="/register">Реєстрація</NavLink>
                                    </Menu.Item>
                                </>}
                            <Menu.Item key="4" onClick={showModal}><UserAddOutlined/>
                                Написати відгук?
                            </Menu.Item>
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
                            <Route path="/tableInstitute">
                                <TableInstitute/>
                            </Route>
                            <Route path="/tableKafedra">
                                <TableKafedra/>
                            </Route>
                            <Route path="/documentation">
                                <DocumentationPage/>
                            </Route>
                            <Route path="/adminMenu">
                                <AdminPage/>
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
                    <Modal
                        title="Ваша думка для нас важлива."
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        style={{}}
                    >
                        <Row style={{display: "flex", justifyContent: "center"}}>
                            <Col span={20}>
                                <form onSubmit={sendEmail}>
                                    <input className="ant-input" placeholder="Ваше ім'я" value={name}
                                           onChange={e => setName(e.target.value)} name="name"
                                    />
                                    <input className="ant-input" placeholder="Емейл" value={email}
                                           onChange={e => setEmail(e.target.value)} style={{marginTop: "3%"}}
                                           name="email"
                                    />
                                    <textarea
                                        className="ant-input"
                                        style={{marginTop: "3%"}}
                                        placeholder="Введіть повідомлення"
                                        value={message}
                                        name="message"
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                    <button type="submit" className="button">ok</button>
                                </form>
                            </Col>
                        </Row>
                    </Modal>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default App
