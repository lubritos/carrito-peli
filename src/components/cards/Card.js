import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

const Portada = styled(CardMedia)`
  width: 20rem;
  display: flex;
  align-items: center;
`;

const ActionAreaCard = ({ portada, nombre, anio, addCart }) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <Portada component="img" image={portada} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {anio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => addCart(nombre)}
          variant="outlined"
          size="small"
          color="primary"
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};
export default ActionAreaCard;
