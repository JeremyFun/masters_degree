import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Row, Upload, Typography} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import ExcelReader from "../Excel/ExcelReader";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { Tabs, Radio, Space } from 'antd';

const HomePage = () => {
    const {Title} = Typography;
    const { TabPane } = Tabs;

    const history = useHistory()
    const [tabPosition, setTabPosition] = useState('left')

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])


    let changeTabPosition = e => {
        setTabPosition(e.target.value)
    };
    return (
        <div className="home">
            <Row>
                <Col span={24}>
                    <Title>Модель автоматизованої системи обліку навчального навантаження підрозділу ВВНЗ</Title>
                    <Title level={2}>Архітектура згідно таблиць GoogleSheet:</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img src={"/img/architectureXLSX.svg"} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={2}>Архітектура веб-додатку:</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img src={"/img/architectureWeb.svg"} />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
