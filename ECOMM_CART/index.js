document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: 1, name: "Apple", price: 99.99 },
        { id: 2, name: "Peache", price: 89.99 },
        { id: 3, name: "Banana", price: 69.909 },
    ]

    const cart = []

    const productList = document.querySelector("#product-list")
    const cartItems = document.querySelector("#cart-itms")
    const emptyCartMessage = document.querySelector("#empty-cart")
    const cartTotalMessage = document.querySelector("#cart-total")
    const totalPriceDisplay = document.querySelector("#total-price")
    const checkOutBtn = document.querySelector("#checkout-btn")

    products.forEach(product => {
        let productDiv = document.createElement("div")
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span> ${product.name} - $${product.price.toFixed(2)} </span>
        <button data-id="${product.id}"> Add to cart</button>
    `
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', function (e) {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"))
            const product = products.find(p => p.id === productId)
            // console.log(product)
            addToCart(product)

        }


})

})