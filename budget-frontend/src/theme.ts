import { createTheme } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  typography: {
    h3: {
      fontSize: "2rem", // Custom font size for h3
      fontWeight: 600,
      letterSpacing: "0.25px",
      color: "#2B2B2B",
      fontFamily: "Poppins"
      // You can also set other properties like lineHeight, letterSpacing, etc.
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "#878A99",
      letterSpacing: "0.25px",
      fontFamily: "Poppins"

    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 400,
      textAlign: "left",
      fontFamily: "Poppins"

    },
    // You can add more customizations for other typography variants here
  },
  // You can add other theme customizations here if needed
});

export default theme;
