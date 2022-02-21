import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Promo() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="purple-box"
      >
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
  );
}
