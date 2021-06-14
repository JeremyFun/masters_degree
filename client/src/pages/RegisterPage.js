import React, {useState, useEffect} from 'react';
import {Form, Input, Select, Checkbox, Button, AutoComplete, notification} from 'antd';
import {login, register} from "../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [form] = Form.useForm();
    const userRegister = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userRegister

    const onFinish = ({name, email, password}) => {
        dispatch(register(name, email, password))
        const args = {
            message: error ? error : "User created!",
            duration: 3,
        };
        notification.open(args);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '380',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="Емейл"
                rules={[
                    {
                        type: 'email',
                        message: 'Ви ввели не правильний емейл!',
                    },
                    {
                        required: true,
                        message: 'Введіть ваш емейл!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Пароль"
                rules={[
                    {
                        required: true,
                        message: 'Введіть ваш пароль!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Повторіть пароль"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Введіть правильний пароль!!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="name"
                label="Імя"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Введіть ваше імя!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    Я погоджуюся з <a href="">інструкцією</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Реєстрація
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterPage
