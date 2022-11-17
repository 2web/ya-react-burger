import { useState, useEffect } from "react";

const useCart = (cards) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const OrderId = cards[0] && typeof cards[0]['_id'] !== "undefined" && cards.map((item) => item._id);
    const OrderPrice = cards[0] && typeof cards[0]['price'] !== "undefined" && cards.reduce((sum, item) => item.price + sum, 0);
      
    setCart(OrderId);
    setPrice(OrderPrice);
  }, [cards[0]])

  return {
    cart,
    price
  }
}

export default useCart;
