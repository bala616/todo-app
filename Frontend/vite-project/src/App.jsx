import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTask = () => {
    axios.post("http://localhost:5000/add", { task })
      .then(res => {
        setTasks([...tasks, res.data]);
        setTask("");
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(() => {
        setTasks(tasks.filter(t => t._id !== id));
      });
  };

  return (
    <div className="container">
      <h1>Todo App 🔥</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.task}
            <button onClick={() => deleteTask(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;