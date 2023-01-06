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
import { ProtectedRoute } from "../protected-route/protected-route";
import NotFound404 from "../../pages/not-found-404";
import IngredientPage from "../../pages/ingredients";
import Modal from "../modal/modal";
import IngredientDetails from "../burger-ingredients/details/details";

function App() {
  const location = useLocation();
  const history = useHistory();

  const background = location.state && location.state.background;
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
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register" exact={true}>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/ingredients/:id" exact={true}>
          <IngredientPage />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <Modal modalGoBack={modalGoBack}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </div>
  );
}

export default App;
