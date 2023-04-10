import React from "react";
import { Button, Group, Text } from "@mantine/core";

export const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  const handleQuantityDecrease = () => {
    const newQuantity = Math.max(item.quantity - 1, 1);
    onQuantityChange(item.id, newQuantity);
  };

  const handleQuantityIncrease = () => {
    const newQuantity = item.quantity + 1;
    onQuantityChange(item.id, newQuantity);
  };

  const handleRemoveButtonClick = () => {
    onRemoveItem(item.id);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
      <img src={item.image} alt={item.name} width={50} height={50} />
      <div style={{ marginLeft: 10 }}>
        <Text size="sm">{item.name}</Text>
        <Group position="left">
          <Button variant="outline" size="xs" onClick={handleQuantityDecrease}>
            -
          </Button>
          <Text>{item.quantity}</Text>
          <Button variant="outline" size="xs" onClick={handleQuantityIncrease}>
            +
          </Button>
          <Button variant="outline" size="xs" onClick={handleRemoveButtonClick}>
            del
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default CartItem;
