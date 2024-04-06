import { useEffect, useState } from "react";
import Task from "./task";
import axios from 'axios';

const TaskContainer= () =>{
    const [formData, setFormData] = useState<any[]>([]);
    const [isValid,setIsValid] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/tasks');
            
            if (response.status === 200) {          
              setFormData(response.data)
              console.log(response.data)
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
    
    <div className="h-screen w-full flex flex-wrap justify-center items-center font-raleway">
            {formData.length > 0 ? formData?.map(task => (
                <Task key={task.id} title={task.title}/>
            )): <div className="absolute top-0 left-0"></div>}
        </div>
    
    )
} 
export default TaskContainer;
