import useHttp from "../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [state, sendRequest] = useHttp();

  //bind 메소드를 사용해서, 중첩 함수 안되게끔 하기
  const taskDataHandler = (taskText, data) => {
    props.onAddTask({
      id: data.name,
      text: taskText,
    });
  };

  const enterTaskHandler = (taskText) => {
    sendRequest(taskText, taskDataHandler.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={state.isLoading} />
      {state.error && <p>{state.error}</p>}
    </Section>
  );
};

export default NewTask;
