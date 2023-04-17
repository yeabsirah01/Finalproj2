import React from "react";
import { Button, Group, Text } from "@mantine/core";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = ({ product }) => {
  const { addToCart, cartItems, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
      <img src={product.image} alt={product.name} width={50} height={50} />
      <div style={{ marginLeft: 10 }}>
        <Text size="sm">{product.name}</Text>
        <Group position="left">
          <Button
            onClick={() => removeFromCart(product.id)}
            variant="outline"
            size="xs"
          >
            -
          </Button>
          <Text>{cartItems[product.id]}</Text>
          <Button
            onClick={() => addToCart(product.id)}
            variant="outline"
            size="xs"
          >
            +
          </Button>
          <Button
            variant="outline"
            size="xs"
            onClick={() => deleteFromCart(product.id)}
          >
            del
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default CartItem;
