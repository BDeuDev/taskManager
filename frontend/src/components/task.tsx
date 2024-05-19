import { DoneOutline, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { common, green } from '@mui/material/colors';
import ITask from '../interfaces/ITask';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { VITE_URL_BASE } from '../config/config';

const Task: React.FC<ITask> = ({ title,id,completed}) => {
  // Función para manejar el clic en el IconButton
  const deleteTask = async() => {
    try {
        const response = await axios.delete(`${VITE_URL_BASE}/tasks/${id}`);
        if(response.status === 200){
            console.log('borrado')
        }
    } catch (error) {
        console.error(error)
    }
  };
  const completeTask = async() => {
    try {
        const response = await axios.put(`${VITE_URL_BASE}/tasks/${id}`);
        if(response.status === 200){
            console.log('completada')
           await deleteTask()
        }
    } catch (error) {
        console.error(error)
    }
  };
    return (
        <div className="w-[350px] h-[250px] bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl m-4 p-4 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl shadow-xl outline-8">
            <div className="flex flex-col justify-center items-center w-full h-2/3">
                <h1 className="text-xl font-bold mt-16 text-black text-center break-all">
                    {title}
                </h1>
            </div>
            <div className="flex flex-row justify-between items-end h-1/3">
                <IconButton aria-label="delete" color='inherit' key={id} onClick={() => deleteTask()}>
                    <DeleteIcon />
                </IconButton>
                <div className="flex flex-row items-end">
                    <Checkbox size='medium' onClick={() => completeTask()} icon={<CheckBoxOutlineBlank />} checkedIcon={<DoneOutline />}
                        sx={{
                            color: common['black'],
                            '&.Mui-checked': {
                                color: green['500'],
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Task;

