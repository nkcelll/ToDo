
// localStorage.getItem()



function listing() {

    let storedList = localStorage.getItem('list');
    // let todoArray = storedList ? JSON.parse(storedList) : [];

    let todoArray = []

    try {
        todoArray = storedList ? JSON.parse(storedList) : [];
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        localStorage.clear(); // Optionally clear the localStorage to avoid future issues
    }

    console.log(todoArray)


    todoListUpdate()

    function todoListUpdate() {

        let genHTML = ''
        
        todoArray.forEach((todoOjbect, index) => {
            
            const {todo} = todoOjbect

            const html = `
            <div class="check"></div>
            <li class="li-display js-list-display-text">${todo}</li> 
            <button class="close js-delete-btn" data-set="${index}">x</button>
            `;
            genHTML += html

        });

        document.querySelector('.loop-cont')
            .innerHTML = genHTML;
        
        // const liItemDes = document.querySelector('.js-list-display-text')
        const hoverBtns = document.querySelectorAll('.js-list-display-text');
        // const geeks = document.querySelectorAll('.check');
        const geeks = document.querySelectorAll('.check');


        hoverBtns.forEach((hoverBtn) => {

            
            
            hoverBtn.addEventListener('click', () => {
                
                if(hoverBtn.classList.contains('text-hover-line')){
                    hoverBtn.classList.remove('text-hover-line');
                
                }else {
                    hoverBtn.classList.add('text-hover-line');
                
                }
            
            });
        });
            // geeks.forEach(geek => {
            //     geek.addEventListener('click', () => {
            //         if(geek.classList.contains('check')) {
            //             geek.classList.remove('check')
            //         } else {
            //             geek.classList.add('check')
            //         }
            //     })
            // })
        
        

        document.querySelectorAll('.js-delete-btn').forEach(button => {
            button.addEventListener('click', deleteList);
        });

    }

    document.querySelector('.js-button')
        .addEventListener('click', () => {
            addTodo()
        })
    document.querySelector('.js-input')
        .addEventListener('keydown', (event) => {
            if(event.key === 'Enter') {
                addTodo();
            }
        })

    function addTodo() {
        const inputElement = document.querySelector('.js-input');
        const inputValue = inputElement.value

        if (inputValue === '') return;

        todoArray.push({
            todo: inputValue
        })

        console.log(todoArray)

        localStorage.setItem('list', JSON.stringify(todoArray)); // Save the updated list after deletion
        inputElement.value = ''
              
        todoListUpdate()
        
    };

    function deleteList(event) {
        const index = event.target.dataset.index;
        todoArray.splice(index, 1);

        localStorage.setItem('list', JSON.stringify(todoArray)); // Save the updated list after deletion
        todoListUpdate()

    }

}

listing()


