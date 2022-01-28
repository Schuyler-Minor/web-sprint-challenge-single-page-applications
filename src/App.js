import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

const App = () => {
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
      <Route>
        <PizzaForm />
      </Route>
    </Switch>
    
   </div>
  );
};
export default App;
