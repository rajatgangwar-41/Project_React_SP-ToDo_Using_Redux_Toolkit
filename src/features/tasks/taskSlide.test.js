import { addTask, deleteTask, store } from "../../app/store"

console.log(store.dispatch(addTask("Apple")))
console.log(store.dispatch(addTask("Mango")))
console.log(store.dispatch(deleteTask(1)))
console.log(store.dispatch(addTask("Grapes")))
console.log(store.dispatch(addTask("Banana")))
console.log(store.dispatch(addTask("Pineapple")))
console.log(store.dispatch(deleteTask(2)))
console.log(store.getState())