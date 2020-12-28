import React,{useContext} from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import {TodoContext} from "../Context/TodoContext"
import {Remove_Todo} from "../Context/action.types"

const Todos =() => {
    // const [todo,dispatch] = useContext(TodoContext)
    const {todo,dispatch} = useContext(TodoContext)
    return(
      
        <ListGroup className="mt-5 mb-2 items">
            {
                todo.map(todo => (
                    <ListGroupItem key={todo.id}>
                        {todo.todostring}
                        <span><FaCheckDouble className="float-right" onClick={() => {
                            dispatch({
                                type:Remove_Todo,
                                payload:todo.id
                            })
                        }}/></span>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )

}
export default Todos