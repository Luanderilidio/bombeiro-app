import * as Styles from "./styles";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Logo from "../../assets/bombeiro.svg";
import Risc from "../../assets/preta.svg";

export default function Inicio() {
  

  return (
    <Styles.Container>
      <meta http-equiv="refresh" content="1; URL='/home'"/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <Styles.Group>
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Styles.Logo src={Logo} />
        </Box>

        <Typography
          sx={{  color: "#98040D", fontWeight: "bold", textAlign: "center" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Bem vindo ao App
        </Typography>
        <Styles.LogoRisc src={Risc} />
      </Styles.Group>
    </Styles.Container>
  );
}
