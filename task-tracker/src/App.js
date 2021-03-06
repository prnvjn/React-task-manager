import {useState,useEffect} from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import { router } from 'json-server'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask]= useState([])

  useEffect (()=>{
  const getTasks = async ()=> {
    const tasksFromServer = await fetchTasks()
    setTask (tasksFromServer)
  }
    getTasks()
  })

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:5000/tasks/${id}')
    const data = await res.json()
    return data
  }


// AddTask
const addTask = async(task)=>{
 const res = await fetch('http://localhost:5000/tasks', {
   method: 'POST',
   headers: {
     'Content-type':'application/json'
   },
   body: JSON.stringify(task)
 })
 const data = await res.json()
 setTask([...tasks,data])
}

 // Delete task
 const deleteTask = async(id) => {
   await fetch(`http://localhost:5000/tasks/${id}`,{
     method: 'DELETE'
   })

   setTask(tasks.filter((task)=> task.id !== id))
 }
// TOGGLE 
const toggleReminder = async(id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle,
  reminder: !taskToToggle.reminder}
const res = await fetch(`http://localhost:5000/tasks/${id}`,
{
  method: 'PUT',
  headers: {
    'Content-type':'application/json'
  },
  body: JSON.stringify(updTask)

})
const data = await res.json()

  setTask(tasks.map((task)=> task.id === id?{...task, reminder:data.reminder}:task ))
}
  return (
    <Router>
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} ontoggle = {toggleReminder} /> : 'NO TASK TO SHOW'}
      

    <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
