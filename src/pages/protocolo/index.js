import * as Styles from "./styles";
import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { createTheme } from "@mui/material/styles";
import { FaCheckCircle } from "react-icons/fa";
import { Box, Button } from "@mui/material";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";


export default function Protocolo() {
  const [open, setOpen] = React.useState(true);

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

        <Typography
          sx={{
            padding: 0,
            color: "#98040D",
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Seu chamado foi realizado com sucesso
        </Typography>

        <IconButton className="animate__animated animate__bounceIn" sx={{}}>
          <FaCheckCircle color={"#3FBE88"} size={200} />
        </IconButton>

        <Box
          sx={{
            boxShadow: 3,
            width: "65vw",
            maxWidth: "500px",
            height: "3rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Protocolo N° 112331
        </Box>

        <Typography
          sx={{
            padding: 0,
            color: "#98040D",
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Os Bombeiros estarão em breve na sua localização
        </Typography>
          <Link to='/'>
            <Button
              sx={{ fontWeight: "bold", color: "#FFFFFF" }}
              theme={Theme}
              variant="contained"
              color="secundary"
            >
              Voltar à tela inicial
            </Button>
          </Link>
      </Styles.Group>

      <Footer/>
    </Styles.Container>
  );  
}
