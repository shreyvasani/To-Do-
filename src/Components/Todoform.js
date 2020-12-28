import React,{useContext,useState} from "react"
import {
    FormGroup,Input,Button,Form,InputGroup,InputGroupAddon
}
from "reactstrap"
import {v4} from "uuid"
import {TodoContext} from "../Context/TodoContext"
import {Add_Todo} from "../Context/action.types"


const Todoform = () => {
    const [todostring,setTodostring] = useState("");
    const {dispatch} = useContext(TodoContext);

    const  handleEvent = e=>{
        e.preventDefault();
        if(todostring === ""){
            return alert ('please enter something')
        }
        // `${console.log(todostring)}`
        const todo = {
            todostring,
            id: v4()
        }
        dispatch({
            type:Add_Todo,
            payload:todo
        })
        setTodostring("")
    }
    return(
        <Form onSubmit={handleEvent}>
            <FormGroup>
            <InputGroup>
                <Input type="text" name="todo" id="todo" placeholder="Your next Todo" value={todostring} 
                onChange={e=> setTodostring(e.target.value)}/>
                <InputGroupAddon addonType="append">
                    <Button color="success">Add_Todo</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default Todoform