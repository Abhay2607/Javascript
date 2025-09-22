let clock = document.querySelector("#clock")
let container = document.querySelector(".container")


function formatTime(currentTime) {
    let hours = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let milliseconds = currentTime.getMilliseconds()


    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    return `${hours}:${minute}:${seconds}:${milliseconds}`;
}

function timeUpdate() {
    clock.textContent = formatTime(new Date());
}

let btnDiv = document.createElement("div")
let button = document.createElement("button")
button.classList.add("btn")
button.textContent = "Add Timestamps"
container.appendChild(btnDiv)
btnDiv.appendChild(button)


button.addEventListener("click", () => {
    let li = document.createElement("li")
    li.textContent = formatTime(new Date())
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("class" , "delete-btn")
    deleteBtn.addEventListener("click", (e) => {
        li.remove()
    })

    let ul = document.querySelector("#timestamp")
    if (!ul) {
        ul = document.createElement("ul")
        ul.setAttribute("id", "timestamp")
        container.appendChild(ul)
    }

    ul.appendChild(li)
    li.appendChild(deleteBtn)

})


timeUpdate()

setInterval(timeUpdate, 10)