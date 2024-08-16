import { saveList } from './storage.js';
// import { getStoredList } from './storage.js';

// getStoredList()

export function updateTodoList(todoArray) {
    let genHTML = '';

    todoArray.forEach((todoObject, index) => {
        const { todo } = todoObject;
        genHTML += `
            <div class="check"></div>
            <li class="li-display js-list-display-text">${todo}</li> 
            <button class="close js-delete-btn" data-index="${index}">x</button>
        `;
    });

    document.querySelector('.loop-cont').innerHTML = genHTML;
}

export function addTodo(todoArray) {
    const inputElement = document.querySelector('.js-input');
    const inputValue = inputElement.value;

    if (inputValue === '') return;

    todoArray.push({ todo: inputValue });
    saveList(todoArray);

    console.log(todoArray)

    inputElement.value = '';
    updateTodoList(todoArray);
}

export function deleteList(todoArray, index) {

    todoArray.splice(index, 1);
    saveList(todoArray);
    updateTodoList(todoArray);
}
