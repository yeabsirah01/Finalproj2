import React from "react";
import { Badge, Image } from "@mantine/core";
import Cart from "./cart";

function CartIcon({ count }) {
  function cartClicked() {
    return <Cart />;
  }
  return (
    <button onClick={cartClicked} style={{ position: "relative", right: 30 }}>
      <Image maw={40} src="cartIcon.png" alt="cart" />
      <Badge
        variant="gradient"
        color="red"
        style={{ position: "absolute", top: -8, right: -22 }}
      >
        {3}
      </Badge>
    </button>
  );
}

export default CartIcon;
