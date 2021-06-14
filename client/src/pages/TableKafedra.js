import React, {useEffect} from "react"
import {Tabs, TabPane} from "antd";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const TableKafedra = () => {
    const { TabPane } = Tabs;
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    const history = useHistory()
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <>
            <Tabs tabPosition={"top"}>
                <TabPane tab="Навчальне навантаження кафедри" key="1">
                    <div style={{overflow: "scroll", height: "80vh"}}>
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0Eu_5XONlaFoQbG_0kgIdhW4CZGF3YnHliKy1OrgxiamVVWboFsTSa3DpQYEjK3c46U9GDNUOZ6_5/pubhtml"
                            className="iframe"/>
                    </div>
                </TabPane>
                <TabPane tab="Розподіл за НПП" key="2">
                    <div style={{overflow: "scroll", height: "80vh"}}>
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVTxHueeBJXqOB5puY6dUkeo9jz9oGK4wk-jsFhitoY4Ojg-BDP9ktPoHhd0yJa-Io3a48xmiqvSht/pubhtml"
                            className="iframe"/>
                    </div>
                </TabPane>
            </Tabs>
        </>

    )
}

export default TableKafedra
