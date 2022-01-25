import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import * as Styles from "./styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiHelpCircle, BiPhoneCall } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Footer from "../footer";
import Logo from "../../assets/bombeiro.svg"

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const Theme = createTheme({
    palette: {
      primary: {
        main: "#98040D",
      },
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="animate__animated animate__animated" sx={{ display: "flex" }}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <CssBaseline />
      <AppBar theme={Theme} color="primary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Styles.Group>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700" }}
              noWrap
              component="div"
            >
              2° CIBM
            </Typography>
            <Avatar src={Logo} /> 
          </Styles.Group>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <FiChevronLeft /> : <FiChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <AiOutlineExclamationCircle size={25} />
            </ListItemIcon>
            <ListItemText>Sobre</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BiHelpCircle size={25} />
            </ListItemIcon>
            <ListItemText>Ajuda</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BiPhoneCall size={25} />
            </ListItemIcon>
            <ListItemText>Contato</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      
      
          
      <Main
  
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: "0"
        }}
        open={open}
      >
        <DrawerHeader />
        <Typography
          className='animate__animated animate__fadeIn'
          sx={{ marginBottom: 0, fontWeight: "900", textAlign: "center", color: "#98040D" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Selecione a ocorrência
        </Typography>
        <Styles.Container>{props.children}</Styles.Container>
        <Footer />
      </Main>
    </Box>
  );
}
