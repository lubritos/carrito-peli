import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Carrito = ({ items }) => {
  const [show, setShow] = useState(false);
  console.log("items cart", items);
  return (
    <div>
      <IconButton size="large" onClick={() => setShow(!show)}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      {show && (
        <div>
          <h2>Prueba</h2>
          {items.map((item) => (
            <div key={item.nombre}>{item.nombre}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Carrito;
