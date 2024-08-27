import { UserOutlined } from "@ant-design/icons";
import {
  faCalendarDays,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  collapsed: boolean;
}

const SideNavigation = (props: Props) => {
  const router = useRouter();

  const MenuItems = [
    {
      key: "/admin/dashboard",
      icon: <FontAwesomeIcon icon={faCalendarDays} />,
      label: `Dashboard`,
    },
    {
      key: "/admin/packages",
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
      label: `Package List`,
    },
    {
      key: "/admin/services",
      icon: React.createElement(UserOutlined),
      label: `Service List`,
    },
  ];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MenuItems}
          onSelect={(item: any) => {
            const pathName = item.key
            router.push(pathName)
          }}
        />
      </Sider>
    </>
  );
};

export default SideNavigation;
