export function getStoredList() {
    let storedList = localStorage.getItem('list');
    let todoArray = [];

    try {
        todoArray = storedList ? JSON.parse(storedList) : [];
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.clear();
    }

    return todoArray;
}

export function saveList(todoArray) {
    localStorage.setItem('list', JSON.stringify(todoArray));
}
