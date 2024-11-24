let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartCount = cart.length;
    document.getElementById('cart-count').innerText = cartCount;
}

// Извикване на тази функция за да се покаже съдържанието на кошницата
function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.innerText = `${item.name} - ${item.price} лв.`;
        cartItemsContainer.appendChild(productElement);
        totalPrice += item.price;
    });

    totalPriceElement.innerText = totalPrice;
}

// Ако кошницата е празна
if (cart.length === 0) {
    document.getElementById('checkout-button').disabled = true;
}

// Извикване на updateCart() на всяка страница, за да се актуализират данните в кошницата
updateCart();
