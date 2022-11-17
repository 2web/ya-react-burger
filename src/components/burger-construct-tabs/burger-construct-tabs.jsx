import {useState} from "react";
import styles from './burger-construct-tabs.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {_BREAD, _SAUCE, _FILLING} from '../../utils/const'

const BurgerConstructTabs = () => {
    const [current, setCurrent] = useState(_BREAD)
    return (
        <div className={`${styles.tabs} mb-10`}>
            <Tab value={_BREAD} active={current === _BREAD} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value={_SAUCE} active={current === _SAUCE} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value={_FILLING} active={current === _FILLING} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

export default BurgerConstructTabs