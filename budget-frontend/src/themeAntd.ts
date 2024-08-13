import { ConfigProvider } from 'antd';
import React from 'react';

// Custom theme settings for Ant Design
const antdTheme = {
  token: {
    colorPrimary: '#1890ff', // Primary color
    colorLink: '#1890ff', // Link color
    fontSize: 16, // Base font size
    fontSizeHeading1: 24, // Heading font size
    fontFamily: "Poppins",
  },
  components: {
    // Customize specific components here
    Menu: {
      colorItemText: '#878A99', // Text color of menu items
      colorItemTextHover: '#fff', // Hover text color of menu items
      colorItemBgHover: '#73e5e1af', // Background color on hover
      colorItemBgSelected: '#7539FF',
      colorItemTextSelected: "#fff",
      fontSize: 16, // Base font size
    fontSizeHeading1: 24, // Heading font size
    fontFamily: "Poppins"
    },
  },
};

export default antdTheme;

