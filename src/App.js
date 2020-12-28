import React,{useReducer} from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {TodoContext} from "./Context/TodoContext.js"
import TodoReducer from "./Context/reducer.js"
import Todoform from './Components/Todoform';
import Todos from "./Components/Todos"
 
const App = () => {
  const [todo,dispatch] = useReducer(TodoReducer,[])
  return(

    <TodoContext.Provider value={{ todo,dispatch }}>
    <Container fluid>
   
        <h1>TODO app with the context react api</h1>
        <Todos />
        <Todoform />
        </Container>
     
   </TodoContext.Provider>

  );
};
export default App;
