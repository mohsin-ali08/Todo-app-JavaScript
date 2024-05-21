var user = document.getElementById("user");
var addBtn = document.getElementById("addBtn");
var main = document.getElementById("main")


function addItem() {
    if(user.value !== ""){
        var node = document.createElement("P")
        var text = document.createTextNode(user.value)
        // pera.appendChild(text)
        node.appendChild(text)
        // console.log(user.value);

        // edit buttons
        var editBtn = document.createElement("button");
        var btnText = document.createTextNode("Edit")
        editBtn.setAttribute("onclick", "editButton(this)")
        editBtn.setAttribute("class", "editButton")
        editBtn.appendChild(btnText)
        node.appendChild(editBtn)
    
    
        // deletebtn
        var deletBtn = document.createElement("Button")
        var btnText = document.createTextNode("Delete")
        deletBtn.setAttribute("onclick", "deleteItem(this)")
        deletBtn.setAttribute("class", "deleteBtn")
        deletBtn.appendChild(btnText);
        node.appendChild(deletBtn);
    
        
        main.appendChild(node)
        
        
    }else{
        alert("please Input  value:")
    }
    user.value=""
}


function deleteItem(str){
    // console.log(str.parentNode.remove());
    str.parentNode.remove()


}



function editButton(edit){
    edit.parentNode.childNodes[0].nodeValue=prompt("edit value")
}


function deleteAll(){
    main.innerHTML = ""
}