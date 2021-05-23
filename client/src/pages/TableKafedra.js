import React from "react"
import {Tabs, TabPane} from "antd";

const TableKafedra = () => {
    const { TabPane } = Tabs;
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
