var userInput = document.getElementById("userInput")
var main = document.getElementById("main")
var btn = document.getElementById("deleteAll")
btn.hidden = true

// Add Todo
function addItem() {
    if (userInput.value !== "") {
        var node = document.createElement("P")
        var text = document.createTextNode(userInput.value)
        node.appendChild(text)

        var editBtn = document.createElement("BUTTON")
        var editText = document.createTextNode("Edit")
        editBtn.setAttribute('onclick', 'editItem(this)')
        editBtn.setAttribute('class', 'editButton')
        editBtn.appendChild(editText)

        var delBtn = document.createElement("BUTTON")
        var delText = document.createTextNode("Delete")
        delBtn.setAttribute('onclick', 'deleteItem(this)')
        delBtn.setAttribute('class', 'deleteBtn')
        delBtn.appendChild(delText)

        node.appendChild(editBtn)
        node.appendChild(delBtn)

        main.appendChild(node)
        btn.hidden = false

    } else {
        alert("Invalid Input")
    }

    userInput.value = ""
}

// Delete Todo
function deleteItem(btn) {
    btn.parentNode.remove()
}

// Edit Todo
function editItem(btn) {
    var editVal = prompt("Edit your todo")
    btn.parentNode.childNodes[0].nodeValue = editVal
}

// Delete All
function deleteAll(){
    main.innerHTML = ""
}

