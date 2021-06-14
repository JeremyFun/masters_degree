import {Form, Input, Button, Checkbox, notification} from 'antd';
import {toast, ToastContainer} from "react-toastify";
import {BrowserRouter, NavLink, useHistory} from "react-router-dom";
import React, {useEffect, useMemo} from "react";
import {login} from "../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {SmileOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    const onFinish = ({email, password}) => {
        dispatch(login(email, password))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        toast.info('Invalid data', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const openNotification = (error) => {
        notification.open({
            message: error,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    useMemo(() => {
        if(error) {
            openNotification(error)
        }
    }, [error])
    return (<>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Емейл"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Введіть правильний емейл!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введіть правильний пароль!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Запамятати мене</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <div className="d-flex"><Button type="primary" htmlType="submit">
                        Увійти
                    </Button>
                        <Title level={5}>&nbsp;&nbsp;&nbsp;Якщо у вас немає акаунту пройдіть <NavLink to="/register">Реєєстрацію</NavLink></Title></div>
                </Form.Item>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer/>
            </Form>
        </>
    );
};

export default LoginPage
