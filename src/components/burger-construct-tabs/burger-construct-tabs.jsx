import {useState} from "react";
import styles from './burger-construct-tabs.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {BREAD, SAUCE, FILLING} from '../../utils/const'

const BurgerConstructTabs = () => {
    const [current, setCurrent] = useState(BREAD)
    return (
        <div className={`${styles.tabs} mb-10`}>
            <Tab value={BREAD} active={current === BREAD} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value={SAUCE} active={current === SAUCE} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value={FILLING} active={current === FILLING} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

export default BurgerConstructTabs