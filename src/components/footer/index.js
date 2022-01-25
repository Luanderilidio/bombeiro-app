import * as React from "react";
import { AppBar, IconButton } from "@mui/material/";
import { createTheme } from "@mui/material/styles";
import * as Styles from "./styles";
import Toolbar from "@mui/material/Toolbar";
import LogoRisc from "../../assets/risc.svg";

export default function Footer() {
  const Theme = createTheme({
    palette: {
      primary: {
        main: "#98040D",
      },
    },
  });

  return (
    <AppBar
      sx={{ width: "100vw" }}
      theme={Theme}
      color="primary"
      position="static"
    >
      <Toolbar>
        <Styles.Container>
          <IconButton aria-label="delete">
            <Styles.Img src={LogoRisc} />
          </IconButton>
        </Styles.Container>
      </Toolbar>
    </AppBar>
  );
}
