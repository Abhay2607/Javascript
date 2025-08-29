document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: 1, name: "Apple", price: 99.50 },
        { id: 2, name: "Peache", price: 89.00 },
        { id: 3, name: "Banana", price: 69.050 },
        { id: 4, name: "Grapes", price: 15.505 },
        { id: 5, name: "Mango", price: 100.00 },
        { id: 6, name: "Cherry", price: 35.50 },
        { id: 7, name: "Watermelon", price: 110.00 },
        { id: 8, name: "muskmelon", price: 67.75 },
    ]

    const cart = []

    const productList = document.querySelector("#product-list")
    const cartItems = document.querySelector("#cart-items")
    const emptyCartMessage = document.querySelector("#empty-cart")
    const cartTotalMessage = document.querySelector("#cart-total")
    const totalPriceDisplay = document.querySelector("#total-price")
    const checkOutBtn = document.querySelector("#checkout-btn")

    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price} </span>
        <button  class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            // console.log('test')
            let productId = parseInt(e.target.getAttribute("data-id"))
            let product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }


    function renderCart() {
        cartItems.innerHTML = ""
        let totalPrice = 0

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden")
            cartTotalMessage.classList.remove("hidden")
            checkOutBtn.classList.remove("hidden")

            cart.forEach((item, index) => {
                totalPrice += item.price;
                let cartDetail = document.createElement('div')
                cartDetail.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button  class="remove-from-cart" data-index="${index}">Remove</button>
                `
                cartItems.appendChild(cartDetail);

                totalPriceDisplay.innerHTML = `$${totalPrice}`;
            })
            
        } else {
            emptyCartMessage.classList.remove("hidden")
            cartTotalMessage.classList.add("hidden")
            checkOutBtn.classList.add("hidden");
        }
    }


    cartItems.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-from-cart")) {
            let index = parseInt(e.target.getAttribute("data-index"));
            cart.splice(index, 1);
            renderCart();
        }
    });


    //ANOTHER METHOD TO DELETE BY USING FIND()
    // cartItems.addEventListener('click', function (e) {
    //     if (e.target.classList.contains("remove-from-cart")) {
    //         let id = parseInt(e.target.getAttribute("data-id"));
    //         let index = cart.findIndex(item => item.id === id); 
    //         cart.splice(index, 1);
    //         renderCart();
    //     }
    // })




    checkOutBtn.addEventListener('click', function () {
        cart.length = 0;
        alert(`Checkout Successful`);
        renderCart();
    })

})