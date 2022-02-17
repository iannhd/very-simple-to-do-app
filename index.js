const todo = document.getElementById('todo')

function add() {
    //ambil nilai dari textnya
    let newText = document.getElementById('new_text')

    //tambahkan list baru ke dalam ul
    let newTodo = `<li class="the_task"> 
                   <span class='newLi' onclick="toggle(this)">  ${newText.value} </span> 
                   <span onclick="removeItem(this)">  [x] </span>
                   </li>`
    

    // let li = document.createElement(`li`)
    // let txt = document.createTextNode(newText.value)

    // li.appendChild(txt)

    todo.insertAdjacentHTML('afterbegin', newTodo)
    // kosongkan fieldnya lagi
    newText.value = ""

    
}

function toggle(el) {
    el.classList.toggle('done')
}

function removeItem(el) {
    el.parentElement.remove()
}