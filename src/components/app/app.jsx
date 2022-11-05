import Header from "../header/header";
import BurgerConstructor from "../burger-construct/burger-construct";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from '../../utils/data.json';
import styles from './app.module.css'

function App() {
    return (
        <main>
            <Header/>
            <div className={styles.app_container}>
                <BurgerConstructor data={data}/>
                <BurgerIngredients data={data}/>
            </div>
        </main>
    );
}

export default App;