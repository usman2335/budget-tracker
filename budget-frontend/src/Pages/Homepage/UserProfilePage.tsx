import { Stack, Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import "../CSS/UserProfilePage.css";
import { UserOutlined } from "@ant-design/icons";
import {
  EmailOutlined,
  KeyboardBackspaceOutlined,
  Link as LinkIcon,
  LocalPhoneOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Anchor, Avatar, Card, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const aboutText =
  "Passionate UI/UX designer with over 5 years of experience in creating user-friendly and visually appealing digital experiences. Skilled in wireframing, prototyping, and user research to deliver intuitive designs. Committed to enhancing user satisfaction through innovative and effective design solutions.";
const items = [
  {
    key: "profile",
    href: "#profile",
    title: "Profile",
  },
  {
    key: "account",
    href: "#account",
    title: "My Account",
  },
];

const PersonalDetailsCard = () => {
  return (
    <Card className="card" title="Personal Details">
      <div className="details-container-profile">
        <div className="details-column">
          <Stack>
            <Typography variant="h5">Full Name</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              Project Manager
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Gender</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              Male
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Email</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              tim.jennings@example.com
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Education</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              Masters
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Address</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              4140 parker Rd. Allentown, New Mexico 31134
            </Typography>
          </Stack>
        </div>
        <div className="details-column">
          <Stack>
            <Typography variant="h5">Father Name</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              Michael Johnson
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Phone</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              (684) 555-0102
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Zip Code</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              44000
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Date of Birth</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              26 Oct 2019
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h5">Budget Limit</Typography>
            <Typography variant="subtitle2" fontWeight={500}>
              30000 PKR
            </Typography>
          </Stack>
        </div>
      </div>
    </Card>
  );
};
const AccountInformationCard = () => {
  return (
    <Card title={"My Account"} className="account-card">
      <div className="details-container-account">
        <div className="detail-div">
          <Typography variant="subtitle2" fontWeight={600}>
            Name & Job
          </Typography>
          <div className="forminput-div">
            <Stack>
              <Typography variant="subtitle2">First Name</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Last Name</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Job Title</Typography>
              <Input className="input-field"></Input>
            </Stack>
          </div>
        </div>
        <div className="detail-div">
          <Typography variant="subtitle2" fontWeight={600}>
            Address
          </Typography>
          <div className="forminput-div address">
            <Stack>
              <Typography variant="subtitle2">Street Address</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">City</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">State</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Zip Code</Typography>
              <Input className="input-field"></Input>
            </Stack>
          </div>
          <Stack>
            <Typography variant="subtitle2">Complete Address</Typography>
            <Input className="input-field"></Input>
          </Stack>
        </div>
        <div className="detail-div">
          <Typography variant="subtitle2" fontWeight={600}>
            Contact Info
          </Typography>
          <div className="forminput-div">
            <Stack>
              <Typography variant="subtitle2">Phone Number</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Email</Typography>
              <Input className="input-field"></Input>
            </Stack>
          </div>
        </div>
        <div className="detail-div">
          <Typography variant="subtitle2" fontWeight={600}>
            Bio
          </Typography>
          <div className="forminput-div">
            <Stack>
              <Typography variant="subtitle2">Date of Birth</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Education</Typography>
              <Input className="input-field"></Input>
            </Stack>
            <Stack>
              <Typography variant="subtitle2">Gender</Typography>
              <Input className="input-field"></Input>
            </Stack>
          </div>
        </div>
        <div className="detail-div">
          <Typography variant="subtitle2" fontWeight={600}>
            Financial Information
          </Typography>
          <div className="forminput-div">
            <Stack>
              <Typography variant="subtitle2">Budget(PKR)</Typography>
              <Input className="input-field"></Input>
            </Stack>
          </div>
        </div>
      </div>
    </Card>
  );
};

const UserProfilePage = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLElement>,
    link: { title: React.ReactNode; href: string }
  ) => {
    const key = items.find((item) => item.href === link.href)?.key;
    if (key) {
      setActiveSection(key);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="profile-top">
        <div className="navigate-back">
          <Link to="/homepage">
            <KeyboardBackspaceOutlined />
          </Link>
          <Typography variant="h3">Profile</Typography>
        </div>
        <div className="anchor-container">
          <Anchor
            direction="horizontal"
            items={items}
            className="anchor"
            onClick={handleAnchorClick}
          ></Anchor>
        </div>
      </div>
      <div className="content-user">
        <div className="content-left">
          <Card className="card-user">
            <div className="card-top">
              <Avatar size={100} icon={<UserOutlined />} className="avatar" />
              <Typography variant="h4">Cameron Dallas</Typography>
              <Typography variant="h5">Project Manager</Typography>
            </div>
            <div className="card-bottom">
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <LocalPhoneOutlined className="color" />
                <Typography variant="h5">(684) 555-0102</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <EmailOutlined className="color" />
                <Typography variant="h5">tim.jennings@example.com</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <LocationOnOutlined className="color" />{" "}
                <Typography variant="h5">New York</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <LinkIcon className="color" />
                <Typography variant="h5">www.webstitename.com</Typography>
              </Stack>
            </div>
          </Card>
        </div>
        <div className="content-right">
          {activeSection === "profile" && (
            <>
              <Stack gap={2}>
                <Card className="card" title="About me">
                  <Typography variant="h5">{aboutText}</Typography>
                </Card>
                <PersonalDetailsCard />
              </Stack>
            </>
          )}
          {activeSection === "account" && <AccountInformationCard />}
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
