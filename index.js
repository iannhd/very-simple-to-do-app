let todos = {} // perantara Local Storage
const STORAGE_TODO = 'STORAGE_TODO'
const todoBox = document.getElementById('todo')


    // ==============================================
    // =====    LOCAL STORAGE =======================
    // ==============================================
    
    // Check if localStorage API is available
    if (typeof (Storage) !== "undefined")
        console.log('Local Storage Available');
    else
        console.log('Oops, your data will gone after page reload');
        

    // read localStorage on first load
    if (todoFromLocal = localStorage.getItem(STORAGE_TODO)) {
        todos = JSON.parse(todoFromLocal)

    // loop isi object todos bikin listnya
        for (let key in todos) {
        createList()
        }
    }
    function syncLocalStorage(activity, item, status =false) {
        switch (activity) {
            case 'ADD':
            case 'UPDATE':
                 todos[item] = status
                break
            case 'DELETE':
                delete todos[item]
                break
            default:
                break
        }
        
        console.log(todos);

        localStorage.setItem(STORAGE_TODO, JSON.stringify(todos))
        return
    }
    
    // ==============================================
    // =====    TODO FUNCTIONS =======================
    // ==============================================


function add() {
    //ambil nilai dari textnya
    let newText = document.getElementById('new_text')

    //tambahkan list baru ke dalam ul
    createList(newText.value)

    syncLocalStorage('ADD', newText.value)


    // kosongkan fieldnya lagi
    newText.value = ""

    function createList(text, status = false) {
        // status ?
        let newTodo = `<li class="the_task"> 
                    <span class='newLi' onclick="toggle(this)">  ${text} </span> 
                    <span onclick="removeItem(this)">  [x] </span>
                    </li>`
        todoBox.insertAdjacentHTML('afterbegin', newTodo)
    }

    
}

function toggle(el) {
    let status = el.classList.toggle('done')
    syncLocalStorage('UPDATE', el.innerText, status)
}

function removeItem(el) {
    el.parentElement.remove()
    syncLocalStorage('DELETE', el.previousElementSibling.innerText.trim())
    
}