
// localStorage.getItem()



function listing() {

    todoListUpdate()

    function todoListUpdate() {

        
        
        const hoverBtns = document.querySelectorAll('.js-list-display-text');
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

    

    

}

listing()


