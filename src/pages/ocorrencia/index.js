import * as Styles from './styles'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import {FiCamera} from 'react-icons/fi';
import Box from '@mui/material/Box';
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";



export default function Ocorrencia() {

  const [open, setOpen] = React.useState(true);

  const Theme = createTheme({
    palette: {
      primary: {
        main: "#98040D",
      },
    },
  });

  const handleClose = () => {
    setOpen(false);
  };
  
  return (

    <Styles.Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Registre um video de 15 segundos"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Passar trotes é crime
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Entendi
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
        <Link to='/localizacao'>
          <Fab  theme={Theme} sx={{marginBottom: '2rem'}} color="primary" aria-label="add">
            <FiCamera size={25} />
          </Fab>
        </Link>  
      </Box>
    </Styles.Container>
  );
} 