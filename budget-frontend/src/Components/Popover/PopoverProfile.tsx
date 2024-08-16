import { Avatar, Popover } from "antd";
import { ReactNode } from "react";
import "./PopoverProfile.css"
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const content = (
  <>    
  <div className = "container-popover">
    <Avatar className = "avatar-popover"></Avatar>
    <div className = "email-container">
      <span> <strong>Ali Hassan</strong></span>
      <span id = "email"> email@mail.com</span>
    </div>
  </div>
  <div>
  <Link to = "/profile" className="text"><p className = "text"><UserOutlined ></UserOutlined>Profile</p></Link>
    <Link to = "/login" ><p className = "text"><LogoutOutlined></LogoutOutlined>Logout</p></Link>
  </div>
  </>
);


const PopoverProfile = ({children} : {children: ReactNode}) => {
  return (
    <Popover placement="bottomLeft" content={content} className="popover">{children} </Popover>
  )
}

export default PopoverProfile