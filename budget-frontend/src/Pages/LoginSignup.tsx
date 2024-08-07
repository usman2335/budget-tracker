import { useState } from 'react';
import { Divider, Typography } from "@mui/material";
import logo from "../Components/assets/logo.svg";
import loginHero from "../Components/assets/loginHero.png";
import signupHero from "../Components/assets/signupHero.png"; 
import "./CSS/LoginSignup.css";
import { Checkbox, Flex, Input } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import LoginSignupBtn from "../Components/LoginSignupBtn/LoginSignupBtn";
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [login, setLogin] = useState(true); // State to toggle between login and signup

  return (
    <div className="loginSignup">
      <div className="login-left">
        <img src={logo} alt="Logo" />
        <div className="login-box">
          {login ? (
            <>
              <Typography variant="h3">Welcome Back!</Typography>
              <Typography variant="subtitle1">
                Sign in to continue to Budget Tracker
              </Typography>
              <div className="login-form">
                <Typography variant="subtitle2">Email</Typography>
                <Input
                  placeholder="test@gmail.com"
                  size="large"
                  suffix={<MailOutlined />}
                  className="input"
                />
                <Typography variant="subtitle2">Password</Typography>
                <Input.Password
                  placeholder="Enter your password"
                  size="large"
                  suffix={<UserOutlined />}
                  className="input"
                />
                  <Flex gap="middle" justify="space-between" className="flex">

                  <Checkbox className="checkbox">Remember me</Checkbox>
                  <Link to = "/forget-password">
                  <Typography
                    variant="subtitle2"
                    className="color-primary signup-toggle"
                    fontWeight={500}
                  >
                    Forgot Password?
                  </Typography>
                  </Link>
                </Flex>
                <LoginSignupBtn>LOG IN</LoginSignupBtn>

                <Flex justify='center' gap={"5px"} className = "filler">
                  <Typography variant="subtitle2">Don't have an account?</Typography>
                  <Typography
                    variant="subtitle2"
                    className="color-primary signup-toggle"
                    fontWeight={600}
                    onClick={() => setLogin(false)}
                  >
                    Sign Up
                  </Typography>
                  </Flex>
              </div>
            </>
          ) : (
            <>
              <Typography variant="h3">Sign Up</Typography>
              <Typography variant="subtitle1">
                Welcome to our community
              </Typography>
              <div className="login-form">
                <Flex gap= "10px">
                  <div className = "container">
                <Typography variant="subtitle2">First Name</Typography>
                <Input
                  placeholder="Enter first name"
                  size="large"
                  className="input signup-input"
                />
                </div>
                <div className = "container"> 
                <Typography variant="subtitle2">Last Name</Typography>
                <Input
                  placeholder="Enter last name"
                  size="large"
                  className="input signup-input"
                />
                </div>
                </Flex>
                <Typography variant="subtitle2">Email</Typography>
                <Input
                  placeholder="test@gmail.com"
                  size="large"
                  suffix = {<MailOutlined />}
                  className="input signup-input"
                />
                <Typography variant="subtitle2">Password</Typography>
                <Input.Password
                  placeholder="Enter your password"
                  size="large"
                  className="input"
                />
                <Typography variant="subtitle2">Confirm Password</Typography>
                <Input.Password
                  placeholder="Re-enter your password"
                  size="large"
                  className="input"
                />
                <Typography variant="subtitle2">Budget Limit</Typography>
                <Input
                  placeholder="Enter Amount"
                  size="large"
                  className="input signup-input"
                />

                <LoginSignupBtn>SIGN UP</LoginSignupBtn>
                <Flex gap="5px" justify="center">
                  <Typography variant="subtitle2">Already have an account?</Typography>
                  <Typography
                    variant="subtitle2"
                    className="color-primary signup-toggle"
                    fontWeight={600}
                    onClick={() => setLogin(true)} // Toggle to login
                  >
                    Sign In
                  </Typography>
                </Flex>
              </div>
            </>
          )}
        </div>
      </div>
      <Divider orientation="vertical" flexItem className="divider" />
      <div className="login-right">
        <img src={login ? loginHero : signupHero} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default LoginSignup;



