import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../utils/images/nuWeb.svg";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/landing">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <Button className="log-out-button">
              <Link to="/" className="link">
                Acessar outra Conta
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
