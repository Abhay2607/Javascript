const DisplayQR = document.querySelector(".container")
const input = document.querySelector("#input")
const btnGenerate = document.querySelector(".btn")


const qrImage = document.createElement('img');
qrImage.style.marginTop = "20px";
qrImage.style.width = "200px";
qrImage.style.height = "200px";
qrImage.style.display = "none";
// qrImage.style.marginLeft = "20px";

DisplayQR.appendChild(qrImage)

const downloadQR = document.createElement("button")
downloadQR.style.marginTop = "20px";
downloadQR.classList.add('btn')
downloadQR.innerHTML = "Download QR"
downloadQR.style.display = "none";
DisplayQR.appendChild(downloadQR)


btnGenerate.addEventListener("click", () => {
    let inputValue = input.value.trim()

    if (inputValue === "") {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000)

    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

        downloadQR.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = qrImage.src;
            link.download = "qr-code.png"; 
            link.click();          //Download trigger here
        });


        
        qrImage.style.display = "block";
        downloadQR.style.display = "block";
    }

})
