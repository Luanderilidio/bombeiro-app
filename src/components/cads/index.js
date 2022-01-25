import { Card, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

export default function Cards(props) {
  return (
    <Link to='/ocorrencia' >

        <Card
          
          sx={{
            boxSizing: "border-box",
            padding: "1rem",
            borderRadius: '.5rem',
            margin: "1rem",
            color: "#FFFFFF",
            background: "#98040D",
            width: "19vh",
            height: "130px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Styles.Container>
            <Typography
              sx={{ margin: 0, fontWeight: "700" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              {props.name}
            </Typography>
            <IconButton   aria-label="delete">
              <Styles.Img src={props.icon} />
            </IconButton>
          </Styles.Container>
        </Card>
    </Link>
  );
}
