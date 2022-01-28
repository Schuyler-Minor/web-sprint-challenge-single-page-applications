import React from "react";




function PizzaForm () {
    return (
        <div>
            <h1>Do You Like Pizza?</h1>
            <form id="pizza-form">
                <label>Name
                <input id="name-input"
                value=""
                type="text"
                />
                </label>
               <label>
                   <select id="size-dropdown">

                   </select>
               </label>

            </form>
        </div>
    )
}

export default PizzaForm;