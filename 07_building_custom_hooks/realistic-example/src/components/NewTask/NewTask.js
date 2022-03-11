import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [taskText, setTaskText] = useState(null);
  const taskDataHandler = (data) => {
    props.onAddTask({
      id: data.name,
      text: taskText,
    });
  };
  const [state, sendRequest] = useHttp(taskDataHandler);

  const enterTaskHandler = async (text) => {
    setTaskText(text);
  };

  async function addText() {
    await sendRequest(taskText);
  }

  useEffect(() => {
    if (taskText) {
      addText();
    }
  }, [taskText]);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={state.isLoading} />
      {state.error && <p>{state.error}</p>}
    </Section>
  );
};

export default NewTask;
