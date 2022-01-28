import React from "react";
import {useHistory} from 'react-router-dom';



function Home() {

    const history = useHistory();
    console.log(history);

    const orderPizza = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <button 
            id="order-pizza"
            onClick={orderPizza}
            >Order Now!!!</button>
        </div>
    )
}

export default Home;