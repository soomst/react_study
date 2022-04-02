import { useDispatch, useSelector } from "react-redux";
import { uiSliceAction } from "../../store/ui-slice";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.item);

  const onClose = () => {
    dispatch(uiSliceAction.toggle());
  };

  const cartItemList = cartItem.length ? (
    cartItem.map((item) => (
      <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    ))
  ) : (
    <li>none</li>
  );

  return (
    <Modal onClose={onClose}>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartItemList}</ul>
      </div>
    </Modal>
  );
};

export default Cart;
