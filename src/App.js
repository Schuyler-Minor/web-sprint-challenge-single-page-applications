import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from "axios";

const initialFormValues = {
  // text inputs
  name: '',
  special: '',
  // dropdown
  size: '',
  // CHECKBOXES
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,

}

const initialFormErrors = {
  name: '',
  special: '',
  size: '',


}

const initialOrders = []


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getOrders = () => {
      axios.get('https://reqres.in/api/orders')
      .then(res => {
        setOrders(res.data.data);
      }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data.data, ...orders])
      setFormValues(initialFormValues)
      console.log(res.data.data)
    }).catch(err => console.error(err))
  }
  
  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //   .validate(value)
  //   .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  //   .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  // }

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['topping1', 'topping2', 'topping3', 'topping4'].filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  // useEffect(() => {
  //   getOrders()
  // }, [])



  return (
   <div>
    
    <nav>
    <h1>BloomTech Eats</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </div>
    </nav>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/pizza">
        <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
        />
      </Route>
    </Switch>
    
   </div>
  );
};
export default App;
