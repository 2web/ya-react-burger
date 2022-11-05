import BurgerConstructTabs from "../burger-construct-tabs/burger-construct-tabs";
import BurgerConstructList from "../burger-construct-list/burger-construct-list";
import {ingredientItem} from "../../utils/const";
import PropTypes from "prop-types";

const BurgerConstruct = (data) => {
    return(
        <section>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <BurgerConstructTabs/>
            <BurgerConstructList ingredients={data.data}/>
        </section>
    )
}

BurgerConstruct.propTypes = {
    data: PropTypes.arrayOf(ingredientItem)
}

export default BurgerConstruct