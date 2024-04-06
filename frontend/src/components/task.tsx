import { DoneOutline, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { common, green } from '@mui/material/colors';
import ITask from '../interfaces/ITask';
import DeleteIcon from '@mui/icons-material/Delete';

const Task: React.FC<ITask> = ({ title,onclick}) => {
    return (
        <div className="w-[350px] h-[250px] bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl m-4 p-4 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl shadow-xl outline-8">
            <div className="flex flex-col justify-center items-center w-full h-2/3">
                <h1 className="text-xl font-bold mt-16 text-black text-center break-all">
                    {title}
                </h1>
            </div>
            <div className="flex flex-row justify-between items-end h-1/3">
                <IconButton aria-label="delete" color='inherit' onClick={onclick}>
                    <DeleteIcon />
                </IconButton>
                <div className="flex flex-row items-end">
                    <Checkbox size='medium' icon={<CheckBoxOutlineBlank />} checkedIcon={<DoneOutline />}
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

