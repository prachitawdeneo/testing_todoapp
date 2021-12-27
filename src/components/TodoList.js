import React from 'react'

export default function TodoList({toDoList}) {
    return (
        <div>
            {toDoList.map((todos,index)=>{
                return(
                    <li key={index} className='todos'> {todos} </li>
                )
            })}
        </div>
    )
}
