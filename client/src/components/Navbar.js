import React from "react"
import {Menu, Typography} from "antd";
import {HomeOutlined, UserSwitchOutlined, TableOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const {Title} = Typography;

const Navbar = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin
    return (
        <div>
            <div className="logo"><Title level={4} className="dis">MADE YATSIY V.M.</Title></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <NavLink to="/">
                        Про сайт
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<TableOutlined/>}>
                    <NavLink to="/tableInstitute">
                        Таблиця Інституту
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<TableOutlined/>}>
                    <NavLink to="/tableKafedra">
                        Таблиця кафедри
                    </NavLink>
                </Menu.Item>
                {userInfo ? <>
                    <Menu.Item key="4" icon={<UserSwitchOutlined/>}>
                        <NavLink to="/adminMenu">
                            Адмін меню
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserSwitchOutlined/>}>
                        <NavLink to="/documentation">
                            Документація
                        </NavLink>
                    </Menu.Item>
                </> :
                    <></>}
            </Menu>
        </div>
    )
}

export default Navbar
