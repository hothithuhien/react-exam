import React, { useState, useRef } from "react";
import FlipMove from "react-flip-move";

export default function TodoListApp() {
    const [tasks, setTasks] = useState([]);
    const newTaskRef = useRef("");
    function addTask() {
      if (newTaskRef.current.value.trim() !== "") {
        setTasks([...tasks, newTaskRef.current.value]);
        newTaskRef.current.value = "";
      }
    }
  return (
    
    <div className="todoApp">
    <h3>My List Task</h3>
      <input
        type="text"
        placeholder="Enter task"
        ref={newTaskRef}
        // onChange={handleInputChange}
      />
      <button onClick={addTask}>Add</button>
      <FlipMove className="flip-wrapper" style={{ color: 'red' }}>
        {tasks.map((task, index) => (
          <div className="listTask" key={index}>{task}</div>
        ))}
      </FlipMove>
    </div>
  );
}

