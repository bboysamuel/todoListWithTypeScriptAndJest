import React from 'react';

const DeleteTaskButton = (props: any) => {

  const {handleRemoveTask, todo} = props

  // console.log('todolist', todoList)

  return (<div>
            <button onClick={() =>{
              handleRemoveTask(todo)
            }}>Remove Task</button>
  </div>)
}

export default DeleteTaskButton
