let hiddenBox = document.querySelector(".hidden")
let generateBtn = document.querySelector("#generate")
let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
let tweetBtn = document.querySelector("#tweet")


function generateQuote(){
    hiddenBox.classList.remove("hidden")
    generateBtn.classList.add("hidden")
    getQuote()
}

function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
        .then(res => res.json())
        .then(data => {
            quote.textContent = data.quote
            author.textContent = data.author
        })
}

tweetBtn.addEventListener("click", () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent} ${author.textContent}`, "Tweet Window", "width=600 , height=300 ")
});




//Another way to use API fetch()
// const api_url = "https://dummyjson.com/quotes/random"

// async function getQuote(url) {
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }

// getQuote(api_url)