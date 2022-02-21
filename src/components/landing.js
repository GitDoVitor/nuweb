import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import React from "react";
import "./landing.scss";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Header from "./header";
import Promo from "./promo";
import api from "../axiosConf";

export default function Landing() {
  const [reload, setReload] = React.useState(true);
  const [pessoas, setPessoas] = React.useState([]);

  React.useEffect(() => {
    api.get("/person/listAllPeople").then((res) => {
      setPessoas(res.data);
      console.log(res.data);
    });
  }, [!reload]);

  return (
    <Box>
      <Header />
      <Promo />

      <Box className="box-table">
        <TableContainer component={Paper}>
          <Table className="landing-table">
            <TableHead className="landing-table-header">
              <TableRow>
                <TableCell>
                  <Typography className="text-white">Nome Completo</Typography>
                </TableCell>
                <TableCell align="center">
                  <Link to="/form">
                    <Add className="text-white" />
                  </Link>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pessoas.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name + " " + row.surname}
                  </TableCell>
                  <TableCell align="center">{row.phoneNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
