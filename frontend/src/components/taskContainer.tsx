import { useEffect, useState } from "react";
import Task from "./task";
import axios from 'axios';

const TaskContainer= () =>{
    const [formData, setFormData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/tasks');
            
            if (response.status === 200) {          
              setFormData(response.data);
            } else {
              console.error('Error al iniciar sesion')
            }
          } catch (error) {
            console.error('Error al obtener datos');
          }
        };
        const timer = setTimeout(() => {
    
          fetchData()
        }, 1000);
    
        return () => clearTimeout(timer);
      });

    return (
    
    <div className="h-auto w-full flex flex-wrap justify-center items-center font-raleway">
            {formData.length > 0 && formData?.map(task => (
                <Task key={task.id} title={task.title} completed={task.completed} id={task.id}/* onclick={} *//>
            ))}
        </div>
    
    )
} 
export default TaskContainer;
