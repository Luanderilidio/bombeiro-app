import * as Styles from "./styles";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Footer from "../../components/footer";
import Logo from "../../assets/bombeiro.svg";

export default function Contato() {
  const Theme = createTheme({
    palette: {
      primary: {
        main: "#98040D",
      },
      secundary: {
        main: "#3FBE88",
      },
    },
  });

  return (
    <Styles.Container>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <Styles.Group>
        <Box
          sx={{
            boxShadow: 3,
            background: "#FF000833",
            width: "100%",
            maxWidth: "500px",
            height: "50vh",

            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              color: "#98040D",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.3rem",
              marginBottom: 0,
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            2ª COMPANHIA
          </Typography>

          <Typography
            sx={{
              color: "#98040D",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.1rem",
              marginBottom: 0,
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            INDEPENDENTE DE BOMBEIROS MILITAR
          </Typography>

          <Styles.Logo src={Logo} />

          <Typography
            sx={{
              color: "#98040D",
              textAlign: "center",
              fontSize: "1.1rem",
              marginBottom: 0,
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Endereço: Via dos Bandeirantes, 800, Bairro DNER - Cáceres/MT
          </Typography>
        </Box>

        <Box
          sx={{
            boxShadow: 3,
            background: "#FF000833",
            width: "100%",
            maxWidth: "500px",
            height: "20vh",

            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 2,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              color: "#98040D",
              textAlign: "left",
              fontWeight: 'bold',
              width: '100%',
              fontSize: "1.1rem",
              marginBottom: 0
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Telefones:
          </Typography>

          <Typography
            sx={{
              color: "#98040D",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.3rem",
              marginBottom: 0,
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Número Geral: 193
          </Typography>
          <Typography
            sx={{
              color: "#98040D",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "1.3rem",
              marginBottom: 0,
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            2° CIBPM: (065) 3223-4391
          </Typography>
        </Box>
      </Styles.Group>
      <Footer />
    </Styles.Container>
  );
}
