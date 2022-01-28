import React from "react";




function PizzaForm (props) {
    const { values, update, submit} = props;

    const onChange = evt => {
        const { value } = evt.target;
    }
    return (
        <div>
            <h1>Do You Like Pizza?</h1>
            <form id="pizza-form">
                <label>Name
                <input id="name-input"
                value=""
                type="text"
                onChange={onChange}
                />
                </label>
               <label>
                   <select id="size-dropdown" onChange={onChange}>
                       <option>--Select a Size--</option>
                       <option>Small</option>
                       <option>Medium</option>
                       <option>Large</option>
                   </select>
               </label>

               <div className="toppings">
                   <h2>Toppings</h2>
               <label>Pepporoni
                   <input 
                    type="checkbox"
                   />
               </label>
               <label>Sausage
                <input 
                type="checkbox"
                />
               </label>
               <label>Black Olives
                   <input 
                   type="checkbox"
                   />

               </label>

               <label>Jalepenos
                   <input 
                   type="checkbox"
                   />

               </label>
               </div>
               <div id="special-text">
                   <label>
                       <h3>Special Instructions</h3>
                       <input 
                       type="text"
                       />
                   </label>

               </div>
               <button>Submit</button>
              

            </form>
        </div>
    )
}

export default PizzaForm;