import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
  task: [],
} 

export const taskReducer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload)
    },

    deleteTask(state, action) {
      state.task = state.task.filter((item, index) => index != action.payload)
    },

    fetchTask(state, action) {
      state.task = [...state.task, action.payload]
    },
  },
})

export const { addTask, deleteTask } = taskReducer.actions
