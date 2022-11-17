import Header from "../header/header";
import MainConstr from '../../pages/main';
import ingredientsContext from '../../context/ingredients-context';
import constructorContext from '../../context/construct-context';
import useGetBase from '../../utils/init';
import ErrorBoundary from "../error/error";
import {useReducer,useEffect} from "react";
import ingredientsFilter from '../../custom-hooks/use-filter';

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
    const { dBase, setdBase } = useGetBase();
    const { breadArr, mainArr, souceArr } = ingredientsFilter(dBase);

    const banInitialState = { ban: [], fill: [] };
    const [banState, setBanState] = useReducer(reducer, banInitialState, undefined);

    function reducer(state, action) {
        switch (action.type) {
        case "random"://временная генерация бургера
            let arr = [...mainArr, ...souceArr];
            let temp_arr = [];
            let c = random(1,10);
            for (var i = 0; i < c; i++) {
                let r = random(0,arr.length-1);
                temp_arr.push(arr[r]);
            }
            let randy = random(0,breadArr.length-1);
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
                <ingredientsContext.Provider value={{ dBase, setdBase }}>
                    <constructorContext.Provider value={{ banState, setBanState}}>
                        <Header/>
                        <MainConstr/>
                    </constructorContext.Provider>
                </ingredientsContext.Provider>
            </ErrorBoundary>
        </main>
    );
}

export default App;