import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTask]= useState([ {
    id:1,
    text:'Doctor Appointment',
    day:'Feb 5th at 2:30pm',
    reminder:true,

},
{
    id:2,
    text:'Meeting',
    day:'Feb 6th at 2:30pm',
    reminder:true,

},
{
    id:3,
    text:'Work',
    day:'Feb 7th at 2:30pm',
    reminder:false,

},
])
// AddTask
const addTask =(task)=>{
  console.log(task)
}

 // Delete task
 const deleteTask = (id) => {
   setTask(tasks.filter((task)=> task.id !== id))
 }
// TOGGLE 
const toggleReminder = (id) => {
  setTask(tasks.map((task)=> task.id === id?{...task, reminder:!task.reminder}:task ))
}
  return (
    <div className="container">
     <Header  />
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} ontoggle = {toggleReminder} /> : 'NO TASK TO SHOW'}

    </div>
  );
}

export default App;
