import './App.css'
import TaskContainer from './components/taskContainer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Form from './components/newTaskForm';
import { h1Title, inputName, taskTitle } from './gateways/formProps';

function App() {
  return (
    <div className=' w-full h-full'>
      <Form title={taskTitle} name={inputName} h1Title={h1Title}/>
      <TaskContainer/>
    </div>
      
    
  )
}

export default App
