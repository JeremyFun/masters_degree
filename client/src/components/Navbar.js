import React from "react"
import {Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <div>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined/>}>
                    nav 3
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
