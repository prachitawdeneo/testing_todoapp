import React from 'react'
import PropTypes from 'prop-types';
export default function Input({initialToDo,onSubmitToDo,setTodo}) {
    let userTodovalue=React.createRef();
    const handleInput=(e)=>{
        const currentValue=e.target.value;
        console.log(currentValue)
        setTodo(currentValue);
    }
    const submitTodo=(e)=>{
        e.preventDefault();
        onSubmitToDo(initialToDo)
        //setTodo('');
    }
    return (
        <div>
            <form className='form' onSubmit={submitTodo}>
             <input type="text" className='inputField' value={initialToDo} ref={userTodovalue} onChange={handleInput} name="searchField"/>
             <button className='button' type='submit'>submit todo</button>
            </form>
        </div>
    )
}
Input.protoTypes={
    initialToDo: PropTypes.string,
    onSubmitToDo: PropTypes.func,
    setTodo: PropTypes.func
}