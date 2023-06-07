import React, { useState, useEffect } from "react";

export default function TodoListApp1() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todo-list"));
    setTasks(savedTasks || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: e.target.value,
        status: "pending",
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      e.target.value = "";
    }
  };

  const handleToggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: task.status === "completed" ? "pending" : "completed",
          };
        }
        return task;
      })
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.id);
  };

  const handleClearAll = () => {
    setTasks([]);
    localStorage.removeItem("todo-list");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return task.status === "pending";
    } else if (filter === "completed") {
      return task.status === "completed";
    }
    return true; // Chế độ "all"
  });

  return (
    <div className="wrapper">
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={handleAddTask}
        />
      </div>
      <div className="controls">
        <div className="filters">
          <span
            className={filter === "all" ? "active" : ""}
            id="all"
            onClick={handleFilterChange}
          >
            All
          </span>
          <span
            className={filter === "pending" ? "active" : ""}
            id="pending"
            onClick={handleFilterChange}
          >
            Pending
          </span>
          <span
            className={filter === "completed" ? "active" : ""}
            id="completed"
            onClick={handleFilterChange}
          >
            Completed
          </span>
        </div>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <ul className="task-box">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => handleToggleStatus(task.id)}
              />
              {task.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
