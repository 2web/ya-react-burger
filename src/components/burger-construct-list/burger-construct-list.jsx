import {useContext} from 'react';
import styles from './burger-construct-list.module.css';
import BurgerItem from "./burger-construct-list-item";

import ingredientsContext from '../../context/ingredients-context';
import ingredientsFilter from '../../custom-hooks/use-filter';

const BurgerConstructList = () => {
    const { dBase } = useContext(ingredientsContext);
    const { breadArr, mainArr, souceArr } = ingredientsFilter(dBase);

    return (
        <div className={styles.list}>
            <BurgerItem title={'Булки'} cards={breadArr} />
            <BurgerItem title={'Соусы'} cards={souceArr} />
            <BurgerItem title={'Начинки'} cards={mainArr} />
        </div>
    )
}

export default BurgerConstructList