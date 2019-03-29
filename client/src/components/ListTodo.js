import React from 'react';

//const ListTodo = ({ todos, deleteTodo }) => {
function ListTodo(props) {
    


  return (
    <ul>
      {
        props.todos &&
          props.todos.length > 0 ?
            (
              props.todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => props.deleteTodo(todo._id)}>{todo.action}</li>
                )
              })
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )
}

export default ListTodo