import React, {FC, ChangeEvent, useState} from 'react';
//fc means functional component
import './App.css';
import {
  //bring components in here
  // SamsTestComponent,
  InputTask,
  AboutThisApp,
  Calendar,
} from './'

import {
  ITask
} from './interfaces'

export const addNums = (num1: number, num2: number) => {
  return num1 + num2;
}

export const updateToAllCaps = (newValue: string) => {
  return newValue.toUpperCase();
}

let subtractNums;

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [deadline, setDeadline] = useState<Date>()

  subtractNums = (num1: number, num2: number) => {
    return num1 - num2;
  }

  return (
    <div className="App">
      <AboutThisApp />
      <h1>Enter your task and deadline to complete</h1>
      <button onClick={() => setTask(updateToAllCaps(task))} >Uppercase</button>
      <InputTask
      task={task}
      setTask={setTask}
      todoList={todoList}
      setTodoList={setTodoList}
      deadline={deadline}
      setDeadline={setDeadline}
       />

    </div>

  );
}

export {subtractNums};

export default App;
