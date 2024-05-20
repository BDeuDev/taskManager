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
export async function newTask(title:string) {
    try {
        const newTask = await Task.create({
            title,
          });
          if(newTask) return {state:'Task created successfuly'}
    } catch (error) {
        console.error(error)
    }
}
export async function editCompleted(id:number) {
    try {
        const completed = true;
        const task = await Task.findByPk(id)
        if(!task){
            return { err: `Task ${id} not found` };
        }
        await task.update({completed});
        return task;
    } catch (error) {
        console.error(error)
    }
}
export async function deleteUserById(userId:any) {
    try {
      const task = await Task.findByPk(userId);
      if (!task) {
        return { err: `Task ${userId} not found` };
      }
      await task.destroy();
      return {success:true}
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  }
