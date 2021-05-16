import React from "react";
import {Button, Card, Col, Form, Row, Upload, Typography} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import ExcelReader from "../Excel/ExcelReader";

const HomePage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 14,
        },
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const {Meta} = Card;

    const {Title} = Typography;
    return (
        <>
            <Row>
                <Col span={24}>
                    <Title>Модель автоматизованої системи обліку навчального навантаження підрозділу ВВНЗ</Title>
                    <Title level={2}>Архітектура проекту:</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img src={require('public/')}
                </Col>
            </Row>
        </>
    )
}

export default HomePage
