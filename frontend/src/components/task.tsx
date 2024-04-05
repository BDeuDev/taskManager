import { DoneOutline,CheckBoxOutlineBlank } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { common } from '@mui/material/colors';

interface ITask {
    title:string
}
const Task:React.FC<ITask> = ({title}) => {
    return (
        <div className="w-[350px] h-[250px] glassmorphism-xl rounded-3xl m-4 p-4 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl outline-8">
            <div className="flex flex-col justify-center items-center w-full h-2/3">
                <h1 className="text-2xl mt-16 text-black text-center break-all">
                    {title}
                </h1>
            </div>
            <div className="flex flex-row justify-end items-end h-1/3">
                <Checkbox size='medium' icon={<CheckBoxOutlineBlank />} checkedIcon={<DoneOutline />}
                    sx={{
                        color: common['black'],
                        '&.Mui-checked': {
                            color: common['black'],
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Task;

