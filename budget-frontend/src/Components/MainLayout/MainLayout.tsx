import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { Avatar, Button, Dropdown, Layout, Menu, Popover } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ReactNode, useState } from "react";
import InsightsIcon from "@mui/icons-material/Insights";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../assets/logo1.svg";
import logo from "../assets/logo.svg";
import "./MainLayout.css";
import { UserOutlined } from "@ant-design/icons";
import PopoverProfile from "../Popover/PopoverProfile";




interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="main-layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={300}
        className="sider"
        theme="light"
      >
        <div className="logo">
          <img src={collapsed ? logo1 : logo} />
        </div>
        <Menu mode="inline">
          <Menu.Item key="1" icon={<InsightsIcon />}>
            <Link to="/homepage/analysis">Analysis</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AttachMoneyIcon />}>
            <Link to="/homepage/expenses">Expenses</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ExitToAppIcon />}>
            <Link to="/login">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Button
            type="text"
            icon={<MenuIcon />}
            onClick={() => setCollapsed(!collapsed)}
            className="menu-btn"
          />
          <div className="header-right">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <NotificationsNoneOutlinedIcon />
                ) : (
                  <NotificationsNoneOutlinedIcon />
                )
              }
              className="menu-btn"
            />

            <PopoverProfile>
              <Avatar size={48} icon={<UserOutlined />} className="avatar" />
              </PopoverProfile>
          </div>
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
