import React, { useRef, useState } from "react";

const Todo = () => {
  const [todoData, setTodoData] = useState([
    {
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, and Fruits",
    },
    {
      title: "Call the plumber",
      description: "Fix the kitchen sink leakage",
    },
    {
      title: "Finish React project",
      description: "Complete UI for the dashboard page",
    },
    {
      title: "Book dentist appointment",
      description: "Preferably next Monday morning",
    },
  ]);

  const [isAdded, setIsAdded] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "", description: ""
  })
  const dataRef = useRef();
  const [expandedRow, setExpandedRow] = useState(null)

  const setToggleClick = (index) => {
    setExpandedRow((prev) => (prev === index) ? null : index)
  }

  const handleDelete = (index) => {
    setTodoData((prev) => prev.filter((todo,i) => i!== index))
  }

  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState("")
  
  return (
    <div>
      <h1>Todo List</h1>
      <div className="flex flex-col justify-center content-center items-center">
        {todoData.map((todo, index) => {
          return (
            <div key={index} ref = {dataRef} className="m-2 p-2 border-black border w-[50%] flex justify-between flex-col">
              <div className="flex justify-between">
                <span>{todo.title}</span>
                <div>
                  <span onClick={() => setToggleClick(index)}>
                    {expandedRow === index ? "🔼" : "🔽"}
                  </span>
                  <button className="bg-red-600" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
              {expandedRow === index && (
                <div>
                  {!edit ? <><span>{todo.description}</span>
                  <button onClick={() => setEdit(prev => !prev)}>🖊</button>
                  </>
                  : 
                  <>
                  <input className="m-2 p-2 border border-black outline-none" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
                  <button onClick={() => {
                    const updatedTodo = todoData.map((val,i) => (
                        i === index ? {...val, description: editedValue} : val
                    ))
                    setTodoData(updatedTodo);
                    setEdit(false)
                  }}>Done</button>
                  </>
                }
                </div>
              )}
            </div>
          );
        })}
         <button onClick={() => setIsAdded(prev => !prev)}>Add</button>
         {isAdded && <div className="flex flex-col">
            <input onChange = {(e) => setNewTodo({ ...newTodo, title: e.target.value })}className="m-2 p-2 border border-black"placeholder="Enter your Todo Title"/>
            <input onChange = {(e) => setNewTodo({ ...newTodo, description: e.target.value })} className="m-2 p-2 border border-black" placeholder="Enter your Todo Description"/>
            </div>}
            {isAdded && <button onClick={() => setTodoData((prevTodo) => [...prevTodo, newTodo])}>Add Todo</button>}
      </div>
    </div>
  );
};

export default Todo;
