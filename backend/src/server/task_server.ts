import Task from "../models/task";

export async function getTasks() {
    try {
        const tasks = await Task.findAll()
        if(tasks.length > 0) return tasks
        else return {err:'No task aviable'}
    } catch (error) {   
        console.error(error)
    }
}
export async function newTask(title:string,completed:boolean) {
    try {
        const newTask = await Task.create({
            title,
            completed,
          });
          if(newTask) return {state:'Task created successfuly'}
    } catch (error) {
        console.error(error)
    }
}
export async function editCompleted(title:string) {
    try {
        const task = await Task.findAll({where:{title:title}})
        return task;
    } catch (error) {
        console.error(error)
    }
}