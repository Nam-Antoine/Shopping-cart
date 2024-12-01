let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    const itemIndex = cart.findIndex(item => item.product === product);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    totalPrice += price;
    updateCart();
}

function removeFromCart(product) {
    const itemIndex = cart.findIndex(item => item.product === product);
    if (itemIndex > -1) {
        totalPrice -= cart[itemIndex].price * cart[itemIndex].quantity;
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('totalPrice');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price} x ${item.quantity}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.product);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    total.textContent = totalPrice.toFixed(2);
}
