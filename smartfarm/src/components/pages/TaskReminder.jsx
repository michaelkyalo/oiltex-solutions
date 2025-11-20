import React, { useState } from "react";

function TaskReminder() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    if (!taskName || !dueDate) return;

    setTasks([...tasks, { taskName, dueDate }]);
    setTaskName("");
    setDueDate("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Task Reminder</h2>

      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task.taskName} - Due: {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskReminder;
