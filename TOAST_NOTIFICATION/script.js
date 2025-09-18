let toastBox = document.querySelector("#toastBox")
let successMsg = ` <i class="fa-solid fa-thumbs-up"></i>   Successfull`
let errorMsg = ' <i class="fa-solid fa-bomb"></i>Error Triggered'
let invalidMsg = ' <i class="fa-solid fa-exclamation"></i> Invalid input'

function showToast(msg){
    let popNotification = document.createElement('div')
    popNotification.classList.add('pop')
    popNotification.innerHTML = msg
    toastBox.appendChild(popNotification)

    if(msg.toLowerCase().includes("error")) popNotification.classList.add('error')
    if(msg.toLowerCase().includes("invalid")) popNotification.classList.add('invalid')


        setTimeout(()=>{
            popNotification.remove()
        }, 4000)

}