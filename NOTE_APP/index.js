document.addEventListener("DOMContentLoaded" , () => {

let createBtn = document.getElementById('create-note')
let noteContainer = document.querySelector('.note-container')

createBtn.addEventListener('click' , function() {
    let div = document.createElement('div')
    div.classList.add('note')
    let noteText = document.createElement('p')
    noteText.setAttribute("contenteditable" , "true")
    noteText.setAttribute("data-placeholder" , "Write your note here...")
    noteText.classList.add('input-box')

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "🗑";
    deleteBtn.title = "Delete Note";

    noteContainer.appendChild(div)
    div.appendChild(noteText)
    div.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", () => {
      div.remove();
    });
})
})