import { addTodo, deleteList } from './dom.js';

export function attachEventListeners(todoArray) {
    document.querySelector('.loop-cont').addEventListener('click', (event) => {
        if (event.target.classList.contains('js-delete-btn')) {
            const index = event.target.dataset.index;
            deleteList(todoArray, index);
        }
    });

    document.querySelector('.js-button').addEventListener('click', () => {
        addTodo(todoArray);
    });

    document.querySelector('.js-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo(todoArray);
        }
    });

    document.querySelector('.loop-cont').addEventListener('click', (event) => {
        if (event.target.classList.contains('js-list-display-text')) {
            event.target.classList.toggle('text-hover-line');
        }
    });
}
