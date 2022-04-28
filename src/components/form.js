import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React from "react";
import Header from "./header";
import Promo from "./promo";
import "./form.scss";
import api from "../axiosConf";
import { Link } from "react-router-dom";

export default function Form() {
  const [data, setData] = React.useState({
    name: "",
    surname: "",
    phoneNumber: "",
  });

  function submit(e) {
    api.post("/person/createNewPerson", {
      name: data.name,
      surname: data.surname,
      phoneNumber: data.phoneNumber,
    });
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    console.log(newData);
    setData(newData);
  }

  return (
    <Box>
      <Header />
      <Promo />
      <Box className="box-paper" component={Paper}>
        <Container className="container">
          <TextField
            className="textfield"
            label="Primeiro Nome"
            variant="standard"
            color="secondary"
            onSubmit={(e) => submit(e)}
            onChange={(e) => handleForm(e)}
            value={data.name}
            id="name"
          />
          <TextField
            className="textfield"
            label="Segundo Nome"
            variant="standard"
            color="secondary"
            onSubmit={(e) => submit(e)}
            onChange={(e) => handleForm(e)}
            value={data.surname}
            id="surname"
          />
          <TextField
            className="textfield"
            label="Telefone"
            variant="standard"
            color="secondary"
            onSubmit={(e) => submit(e)}
            onChange={(e) => handleForm(e)}
            id="phoneNumber"
            value={data.phoneNumber}
          />
          <Link to="/">
            <Button
              className="button"
              variant="contained"
              onClick={submit}
              type="submit"
            >
              Enviar
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
