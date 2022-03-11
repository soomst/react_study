import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const [state, sendRequest] = useHttp();

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    const taskDataHandler = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    }

    sendRequest('', taskDataHandler);
  }, [sendRequest]);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={state.isLoading}
        error={state.error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
