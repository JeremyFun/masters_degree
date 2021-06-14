import React, {useEffect, useState} from "react"
import {Button, Form, Input, notification, Tabs, Typography} from 'antd';
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SmileOutlined} from "@ant-design/icons";
import EditableTable from "../components/EditableUser";

const AdminPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {TabPane} = Tabs;

    function callback(key) {
        console.log(key);
    }
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin
    const [currentDataTable, setCurrentDataTable] = useState(null)
    const {Title} = Typography;
    const layout = {
        labelCol: {span: 2},
        wrapperCol: {span: 8},
    };
    const openNotification = (error) => {
        notification.open({
            message: error,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const onFinish = ({token, sheetId}) => {
        console.log(token, sheetId)
        if (token !== '' && sheetId !== '') {
            fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'21'!D4:U76`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => res.json()).then(res => {
                setCurrentDataTable(res.values)
            }).catch(err => {
                openNotification("Введені дані не вірні")
            })
            if(currentDataTable !== null) {
                fetch(`https://sheets.googleapis.com/v4/spreadsheets/1bNTGXHNNQYn5v5FPKEvh_k5_s8IGF3zQNPDOK97Aet0/values/'21'!D4:U76?valueInputOption=USER_ENTERED&includeValuesInResponse=true`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        //update this token with yours.
                        Authorization: `Bearer ${token}`,
                    },
                    valueInputOption: "USER_ENTERED",
                    body: JSON.stringify({
                        values: currentDataTable
                    })
                }).then(res => res.json())
                    .then(res => {
                        if(res) {
                            openNotification("Все виконано чудово)")
                        }
                    })
            }
        }
    }
    useEffect(() => {
    })
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Користувачі" key="1">
                <EditableTable />
            </TabPane>
            <TabPane tab="Парсинг файла" key="2">
                <Title>Перед початком використання, прочитайте документацію за <NavLink
                    to="/documentation">посиланням</NavLink></Title>
                <Form {...layout} name="nest-messages" onFinish={onFinish}>
                    <Form.Item name={['token']} label="TOKEN" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['sheetId']} label="SHEETS_ID" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 2}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </TabPane>
        </Tabs>
    )
}

export default AdminPage
