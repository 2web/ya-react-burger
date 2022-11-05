import BurgerConstructTabs from "../burger-construct-tabs/burger-construct-tabs";
import BurgerConstructList from "../burger-construct-list/burger-construct-list";

const BurgerConstruct = (data) => {
    return(
        <section>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <BurgerConstructTabs/>
            <BurgerConstructList ingredients={data.data}/>
        </section>
    )
}

export default BurgerConstruct