import React from "react";


function PizzaForm(props) {
    const { values, change, submit, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { value, name, type, checked } = evt.target;
        const trueValue = type === 'checkbox' ? checked : value;

        change(name, trueValue);
    }
    return (
        <div>
            <h1>Do You Like Pizza?</h1>
            <h2>Order here dummy</h2>
            <form id="pizza-form">

                <label>Name&nbsp;
                <input 
                id="name-input"
                value={values.name}
                name='name'
                type='text'
                onChange={onChange}
                />
                </label>

               <label>
                   <select 
                   id="size-dropdown" 
                   onChange={onChange}
                   value={values.size}
                   name='size'
                   >
                       <option value=''>--Select a Size--</option>
                       <option value='small'>Small</option>
                       <option value='medium' >Medium</option>
                       <option value='large'>Large</option>
                   </select>
               </label>

               <div className="toppings">
                   <h2>Toppings</h2>
               <label>Pepporoni
                   <input 
                    type='checkbox'
                    name="topping1"
                    checked={values.topping1}
                    onChange={onChange}
                   />
               </label>

               <label>Sausage
                <input 
                type="checkbox"
                name="topping2"
                checked={values.topping2}
                onChange={onChange}
                />
               </label>

               <label>Black Olives
                   <input 
                   type="checkbox"
                   name="topping3"
                   checked={values.topping3}
                   onChange={onChange}
                   />
               </label>

               <label>Jalapenos
                   <input 
                   type="checkbox"
                   name="topping4"
                   checked={values.topping4}
                   onChange={onChange}
                   />

               </label>
               </div>
               <div id="special-text">
                   <label>
                       <h3>Special Instructions</h3>
                       <input 
                       type="text"
                       value={values.special}
                       name='special'
                       onChange={onChange}
                       />
                   </label>

               </div>
               <button>Add to Order</button>

               <div className="errors">
                   <div>{errors.name}</div>
                   <div>{errors.size}</div>
                   <div>{errors.special}</div>

               </div>
              

            </form>
        </div>
    )
}

export default PizzaForm;