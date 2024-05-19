import axios from "axios";
import { useState } from "react";
import IForm from "../interfaces/IForm";


const Form:React.FC<IForm> = ({title,name,h1Title}) => {

      const [formData, setFormData] = useState<{ [key: string]: string }>({});
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    console.log(formData)
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await axios.post('https://task-manager-backend-nine.vercel.app//api/tasks', formData);
          if (response.status === 200) {
            //agregar modal
          } 
        } catch (error) {
          console.error('Error al enviar los datos al servidor:', error);
        }
      };
    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-sm mx-auto my-8 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold">{h1Title}</h1>
        {title.map((text,index)=>(
            <div className="mx-2 my-3" key={text}>
                <label htmlFor={`${name[index]}`} className="text-lg">{text}</label>
                <input type="text" onChange={handleInputChange} name={name[index]} className="p-3 text-lg rounded-lg shadow-sm outline-none w-full" required/>
            </div>
            
        ))}
            <div className="mx-2 mt-5 w-full">
          <input type="submit" value="Add+" className="cursor-pointer border text-lg font-bold p-3 rounded-xl w-full transition-all duration-700 ease-in-out transform text-white bg-black hover:text-black hover:bg-white hover:outline-1 hover:outline shadow-md" />
        </div>

        </form>
    );
}

export default Form;
