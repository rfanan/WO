import { COLOR } from "@/styles/color";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

interface Props {
    collapsed: boolean;
    onClick?: any;
}

const DashboardHeader = (props: Props) => {

    return (
        <>
            <Header style={{ padding: 0, background: COLOR.white }}>
                <Button
                    type="text"
                    icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={props.onClick}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </Header>
        </>
    )
}

export default DashboardHeader;