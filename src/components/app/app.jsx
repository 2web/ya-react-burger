import Header from "../header/header";
import MainConstr from "../../pages/main";
import ErrorBoundary from "../error/error";
import { Provider } from "react-redux";
import { store } from "../../store/index";

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Provider store={store}>
          <Header />
          <MainConstr />
        </Provider>
      </ErrorBoundary>
    </main>
  );
}

export default App;
