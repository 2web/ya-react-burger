import Header from "../header/header";
import BurgerConstructor from "../burger-construct/burger-construct";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import ErrorBoundary from "../error/error";
import React from "react";
import { _URL,_ING } from "../../utils/const";
import { fetchQ } from "../../utils/fetch";

import styles from './app.module.css'

function App() {
    const [state, setState] = React.useState([]);
    React.useEffect(() => {
        fetchQ(_URL + _ING, setState);
    }, []);

    return (
        <main>
            <ErrorBoundary>
                <Header/>
                <div className={styles.app_container}>
                    <BurgerConstructor data={state}/>
                    <BurgerIngredients data={state}/>
                </div>
            </ErrorBoundary>
        </main>
    );
}

export default App;