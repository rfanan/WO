import { UserOutlined } from "@ant-design/icons";
import { faAddressCard, faCalendarDays, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

interface Props {
    collapsed: boolean;
}

const SideNavigation = (props: Props) => {

    const MenuItems = [
        {
            key: "/admin/calendar",
            icon: <FontAwesomeIcon icon={faCalendarDays} />,
            label: `Calendar`,
        },
        {
            key: "/admin/student",
            icon: <FontAwesomeIcon icon={faUserGraduate} />,
            label: `Student`,
        },
        {
            key: "/admin/your-profile",
            icon: React.createElement(UserOutlined),
            label: `Your Profile`,
        },
        {
            key: "/admin/enrollment",
            icon: <FontAwesomeIcon icon={faAddressCard} />,
            label: `Enrolment`,
        },
    ]

    return (
        <>
            <Sider trigger={null} collapsible collapsed={props.collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={MenuItems}
                />
            </Sider>
        </>
    )
}

export default SideNavigation;