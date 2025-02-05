import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { useState } from 'react'
import { addTask, deleteTask } from '../features/tasks/taskSlice'


const Todo = () => {

  const [userTask, setUserTask] = useState("")

  const tasks = useSelector(state => state.taskReducer.task)
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()  
    dispatch(addTask(userTask))
    return setUserTask("")
  }

  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id))
  }

  // const handleFetchTasks = () => {
  //   return dispatch(fetchTasks())
  // }

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input 
              type="text" 
              id="input-box" 
              placeholder="Add a new task" 
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>

        {/* <button onClick={handleFetchTasks}>Fetch Tasks</button> */}

        <ul id="list-container">
          {
            tasks?.map((curTask, index) => {
              return (
                <li key={index}>
                  <p>
                    {index + 1}: {curTask}
                  </p>
                  <div>
                    <MdDeleteForever
                      className="icon-style"
                      onClick={() => handleTaskDelete(index)}
                    />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Todo
