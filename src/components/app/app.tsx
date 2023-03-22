import { FC } from 'react';
import { useAppDispatch } from "../../custom-hooks/hooks";
import { useEffect } from "react";
import { getIngredients } from "../../utils/init";
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
        <Route path="/" exact={true}>
          <MainConstr />
        </Route>
        <ProtectedRoute path="/login" exact={true} onlyAuth={false}>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path="/register" exact={true} onlyAuth={false}>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path="/forgot-password" exact={true} onlyAuth={false} >
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute path="/reset-password" exact={true} onlyAuth={false}>
          <ResetPassword />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <IngredientPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true} onlyAuth={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true} onlyAuth={true}>
          <OrdersPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <OrderPage />
        </ProtectedRoute>
        <Route path="/feed" exact={true}>
          <FeedPage />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <OrderPage />
        </Route>
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
      {background && (
        <Switch>
          <Route path="/ingredients/:id">
            <Modal modalGoBack={modalGoBack}>
              <IngredientDetails />
            </Modal>
          </Route>
          <ProtectedRoute path="/profile/orders/:id" onlyAuth={true}>
            <Modal modalGoBack={modalGoBack}>
              <OrderDetail />
            </Modal>
          </ProtectedRoute>
          <Route path="/feed/:id">
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
