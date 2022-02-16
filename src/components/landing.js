import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../utils/images/nuWeb.svg";
import "./landing.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="header">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img src={Logo} alt="logo" className="logo" />
              <Button className="log-out-button">
                <Link to="/" className="link">
                  Acessar outra Conta
                </Link>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className="purple-box"
        >
          <Box className="text-white">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box>
                <Container>
                  <Typography>Olá, João Vitor!</Typography>
                </Container>
              </Box>
              <Box>
                <Container>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography>Conta</Typography>
                    <VisibilityIcon className="purple-box-account-grid-icon" />
                  </Grid>
                  <Typography>
                    <b>R$ 246,00</b>
                  </Typography>
                </Container>
              </Box>
            </Grid>
          </Box>

          <Box className="grid-item">
            <Container>
              <Typography align="left">
                Veja os descontos que preparamos para você no{" "}
                <Typography variant="" className="text-purple">
                  Shopping Nubank
                </Typography>
              </Typography>
            </Container>
          </Box>

          <Box className="grid-item">
            <Container>
              <Typography align="left">
                <Typography variant="" className="text-purple">
                  25% de desconto
                </Typography>{" "}
                em empréstimo com portabilidade de salário
              </Typography>
            </Container>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
