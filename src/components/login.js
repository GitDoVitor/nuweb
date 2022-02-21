import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "../utils/images/nuWeb.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box>
      <Container className="login-container">
        <img src={Logo} alt="logo"></img>
        <Link to="/landing" className="link">
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            className="login-button"
          >
            Logar com Github
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
