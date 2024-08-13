import { Avatar, Popover } from "antd";
import { ReactNode } from "react";
import "./PopoverProfile.css"
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Typography } from "@mui/material";

const text = <span>Title</span>;

const content = (
  <>    
  <div className = "container">
    <Avatar className = "avatar-popover"></Avatar>
    <div className = "email-container">
      <span> <strong>Ali Hassan</strong></span>
      <span id = "email"> email@mail.com</span>
    </div>
  </div>
  <div>
    <p className = "text"><UserOutlined></UserOutlined>Profile</p>
    <p className = "text"><LogoutOutlined></LogoutOutlined>Logout</p>
  </div>
  </>
);


const PopoverProfile = ({children} : {children: ReactNode}) => {
  return (
    <Popover placement="bottomLeft" content={content} className="popover">{children} </Popover>
  )
}

export default PopoverProfile