# Side Effects, Async Task & Redux

## Q. Where Should side-effects and async tasks be excuted?

reducer함수는 순수함수여야 한다. 따라서 side-effect가 없고, synchronous fucntion이여야 하는데  
redux에서 side-effects and async tasks를 어떻게 수행해야 할까?

### solution

- Inside the **componenets** (e.g. useEffet())

  ```
  //e.g. - App.js
  import { Fragment, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import Cart from "./components/Cart/Cart";
  import Layout from "./components/Layout/Layout";
  import Products from "./components/Shop/Products";
  import { uiSliceAction } from "./store/ui-slice";
  import Notification from "./components/UI/Notification";

  let isInitial = true;

  function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
      const sendCartData = async () => {
        dispatch(
          uiSliceAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!",
          })
        );
        const options = {
          method: "PUT",
          body: JSON.stringify(cart),
        };

        const response = await fetch(
          "https://react-http-42cd7-default-rtdb.firebaseio.com/cart.json",
          options
        );

        if (!response.ok) {
          throw new Error("Sending cart datat faild");
        }

        const responseData = await response.json();

        dispatch(
          uiSliceAction.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      };

      if (isInitial) {
        isInitial = false;
        return;
      }

      sendCartData().catch((error) =>
        dispatch(
          uiSliceAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart datat faild!",
          })
        )
      );
    }, [cart, dispatch]);

    return (
      <Fragment>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Layout>
          {showCart && <Cart />}
          <Products />
        </Layout>
      </Fragment>
    );
  }

  export default App;

  ```

  - **useEffect를 사용할 때 문제** : 앱이 시작될 때 그것이 실행된다.  
    초기(즉, 비어 있는) 카트를 백엔드로 보내고 거기에 저장된 모든 데이터를 덮어쓰기 때문에 문제이다.

- Inside the **actions creators** : use ["Thunk"](https://redux-advanced.vlpt.us/2/01.html)
  - A function that delays an action until later : action을 무언가 끝날 때까지 미뤄준다.  
    An action creator function that does NOT return the action itself  
    but another function which eventually returns the action.
  - action을 바로 return 하지 않고, 다른 함수를 return 하고 난 후 마지막에? action을 return한다.  
    즉, 다른 코드를 먼저 실행하고, 우리가 생성하고자 했던 실제 action을 dispatch 한다.

---
