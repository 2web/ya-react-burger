import { FC } from 'react';
import { useAppDispatch } from "../../custom-hooks/hooks";
import { useEffect } from "react";
import { getIngredients } from "../../utils/init";
import { 
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_FORGOT_PASS,
  ROUTE_RESET_PASS,
  ROUTE_ING_ID,
  ROUTE_PROFILE,
  ROUTE_PROFILE_ORDERS,
  ROUTE_PROFILE_ORDERS_ID,
  ROUTE_FEED,
  ROUTE_FEED_ID } from "../../utils/const";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";

import Header from "../header/header";
import MainConstr from "../../pages/main";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPassword from "../../pages/forgotpassword";
import ResetPassword from "../../pages/resetpassword";
import ProfilePage from "../../pages/profile";
import OrdersPage from "../../pages/orders";
import OrderPage from "../../pages/order";
import FeedPage from "../../pages/feed";
import { ProtectedRoute } from "../protected-route/protected-route";
import NotFound404 from "../../pages/not-found-404";
import IngredientPage from "../../pages/ingredients";
import OrderDetail from "../order/detail/detail";
import Modal from "../modal/modal";
import IngredientDetails from "../burger-ingredients/details/details";
import { ILocationState } from "../../models/models";

export const App: FC = () => {
  const dispatch: Function = useAppDispatch();
  const location = useLocation<ILocationState | any>();
  const history = useHistory();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const background = location.state && location.state?.background;
  const modalGoBack = () => {
    history.goBack();
  };


  return (
    <div>
      <Header />
      <Switch location={background || location}>
        <Route path={ROUTE_HOME} exact={true}>
          <MainConstr />
        </Route>
        <ProtectedRoute path={ROUTE_LOGIN} exact={true} onlyAuth={false}>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_REGISTER} exact={true} onlyAuth={false}>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_FORGOT_PASS} exact={true} onlyAuth={false} >
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_RESET_PASS} exact={true} onlyAuth={false}>
          <ResetPassword />
        </ProtectedRoute>
        <Route path={ROUTE_ING_ID} exact={true}>
          <IngredientPage />
        </Route>
        <ProtectedRoute path={ROUTE_PROFILE} exact={true} onlyAuth={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_PROFILE_ORDERS} exact={true} onlyAuth={true}>
          <OrdersPage />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_PROFILE_ORDERS_ID} exact={true} onlyAuth={true}>
          <OrderPage />
        </ProtectedRoute>
        <Route path={ROUTE_FEED} exact={true}>
          <FeedPage />
        </Route>
        <Route path={ROUTE_FEED_ID} exact={true}>
          <OrderPage />
        </Route>
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
      {background && (
        <Switch>
          <Route path={ROUTE_ING_ID}>
            <Modal modalGoBack={modalGoBack}>
              <IngredientDetails />
            </Modal>
          </Route>
          <ProtectedRoute path={ROUTE_PROFILE_ORDERS_ID} onlyAuth={true}>
            <Modal modalGoBack={modalGoBack}>
              <OrderDetail />
            </Modal>
          </ProtectedRoute>
          <Route path={ROUTE_FEED_ID}>
            <Modal modalGoBack={modalGoBack}>
              <OrderDetail />
            </Modal>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
