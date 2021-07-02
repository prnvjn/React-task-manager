import Task from './task'


const Tasks = ({tasks,onDelete,ontoggle}) => {

    return (
        <>
            {tasks.map((task)=>( 
           <Task key ={task.id} task = {task} onDelete={onDelete} ontoggle = {ontoggle}/>
                ))}
        </>
    )
}

export default Tasks