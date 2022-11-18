import Header from "../header/header";
import MainConstr from '../../pages/main';
import IngredientsContext from '../../context/ingredients-context';
import ConstructorContext from '../../context/construct-context';
import useGetBase from '../../utils/init';
import ErrorBoundary from "../error/error";
import {useReducer,useEffect} from "react";
import ingredientsFilter from '../../custom-hooks/use-filter';
import random from '../../utils/functions';


function App() {
    const { dBase, setdBase } = useGetBase();
    const { breadArr, mainArr, souceArr } = ingredientsFilter(dBase);

    const banInitialState = { ban: [], fill: [] };
    const [banState, setBanState] = useReducer(reducer, banInitialState, undefined);

    function reducer(state, action) {
        switch (action.type) {
        case "random"://временная генерация бургера
            const arr = [...mainArr, ...souceArr];
            const temp_arr = [];
            const c = random(1,10);
            for (var i = 0; i < c; i++) {
                let r = random(0,arr.length-1);
                temp_arr.push(arr[r]);
            }
            const randy = random(0,breadArr.length-1);
            return { 
                ban: breadArr.filter((item,index) => index === randy),
                fill: temp_arr 
            };
        case "reset":
            return banInitialState;
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    useEffect(() => {
        setBanState({type: 'random'});
    }, [breadArr]);

    return (
        <main>
            <ErrorBoundary>
                <IngredientsContext.Provider value={{ dBase, setdBase }}>
                    <ConstructorContext.Provider value={{ banState, setBanState}}>
                        <Header/>
                        <MainConstr/>
                    </ConstructorContext.Provider>
                </IngredientsContext.Provider>
            </ErrorBoundary>
        </main>
    );
}

export default App;