import sequelize from '../config/database'
import{ DataTypes } from 'sequelize';

const Task = sequelize.define('Task',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
    {
        modelName: 'Task', 
        tableName: 'task'
    }
)
Task.sync();

export default Task;