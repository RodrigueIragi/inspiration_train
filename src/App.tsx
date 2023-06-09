import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from 'react-beautiful-dnd'



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  console.log(todo)

  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodo] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: true }])
      setTodo("")
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, active = todos, completed = completedTodos;
    if (source.droppableId === 'TodoList') {
      add = active[source.index];
      active.splice(source.index, 1)
    }
    else{
      add = completed[source.index];
      completed.splice(source.index, 1)
    }

    if (destination.droppableId === 'TodoList') {
  
      active.splice(destination.index, 0, add)
    }
    else{
      completed.splice(destination.index, 0, add)
    }
    setCompletedTodo(completed);
    setTodos(active)
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodo={setCompletedTodo} />

    </div>
  </DragDropContext>
}


export default App