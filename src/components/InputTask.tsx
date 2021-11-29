import React, {FC, useState, SetStateAction, Dispatch} from 'react'

import {
  ITask
} from './interfaces'

import { DeleteTaskButton} from './'


const InputTask = (props: any) => {
  const {task, setTask, deadline, setDeadline, todoList, setTodoList} = props

  const handleTaskInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setTask(e.currentTarget.value)
  }

  const handleDeadlineInput = (e: React.FormEvent<HTMLInputElement>) => {
    setDeadline(e.currentTarget.value)

  }

  const handleAddTaskToList = (e: React.FormEvent): void => {
    e.preventDefault()
    const newTask = {taskName: task, deadline: deadline}
      setTodoList([...todoList, newTask])
      setTask('')
      setDeadline('')
      const inputFormForTask = (document.getElementById("inputForTask") as HTMLFormElement)
      inputFormForTask.focus()

  }

  const handleRemoveTask = (todoObj: object) => {
    const indexOfClickedTodo = todoList.indexOf(todoObj)
    const arrayOfTodos = todoList
    arrayOfTodos.splice(indexOfClickedTodo, 1)
    setTodoList([...arrayOfTodos])
  }


  return (<div>

    <form
      onSubmit={handleAddTaskToList}
    >
      <input id="inputForTask" placeholder="task" type="text" value={task} onChange={handleTaskInput} />
      <input placeholder="deadline" type="number" value={deadline} onChange={handleDeadlineInput} />

      <button
        // onClick={handleAddTaskToList}
        >Add Task
      </button>
   </form>


    <div className="todoListDisplay" >
      {todoList.map((todo: ITask, idx: number) => {
        const {taskName, deadline} = todo
        return(
        <div className="todoListContainer" key={idx}>
            <ul className="ulTodoList">
              <ul id={`${taskName}`} className="todoListTask">
                <li> <h4>Task: {taskName} </h4> </li>
                <li> <h5> Due Date: {deadline} </h5> </li>
                < DeleteTaskButton
                handleRemoveTask={handleRemoveTask}
                todo={todo}
                />
              </ul>
            </ul>
          </div>
          )
      })}
    </div>
  </div>)

}

export default InputTask
