import { getStoredList, saveList } from './storage.js';
import { updateTodoList, addTodo, deleteList } from './dom.js';
import { attachEventListeners } from './events.js';

function listing () {
    const todoArray = getStoredList()

    updateTodoList(todoArray)
  
    
    attachEventListeners(todoArray)
}

listing()