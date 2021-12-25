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

/*
TODO:
menu nav bar
footer
about tab
description
edit
reset cal on submission and on click
if 1 day left turns red.

*/

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [deadline, setDeadline] = useState<any>('')

  return (
    <div className="App">
      <AboutThisApp />
      <h1>Enter your task and deadline to complete</h1>
      <InputTask
      task={task}
      setTask={setTask}
      todoList={todoList}
      setTodoList={setTodoList}
      deadline={deadline}
      setDeadline={setDeadline}
       />
      {/* <SamsTestComponent /> */}

    <div className="calInAppContainer">
      {/* < Calendar /> */}
    </div>

    </div>

  );
}

export default App;
