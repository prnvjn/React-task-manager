import Task from './task'


const Tasks = ({tasks,onDelete,ontoggle}) => {

    return (
        <>
            {tasks.map((task,index)=>( 
           <Task key ={index} task = {task} onDelete={onDelete} ontoggle = {ontoggle}/>
                ))}
        </>
    )
}

export default Tasks
