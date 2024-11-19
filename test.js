<script>
    let cart = [];

    function addToCart(name,price)

    {
        cart.push({name,price});
        updateCartCount();
        showNotification(Added ${name} to cart!);
    }

    function updateCartCount(){
        document.querySelect or('.cart-count').textContent = cart.length;
    }

    function showNotification(message){
        alert(message);// In a real store, you'd want a nicer notification system
    }

    function toggleCart() {
        const modal = document.getElementById('cart-modal');
        const backdrop = document.getElementById('modal-backdrop'); 
        const display = modal.style.display === 'block'? 'none': 'block';
        modal.style.display = display;
        backdrop.style.display = display;

        if(display === 'block') {
            updateCartDisplay();
        }
    }

    function updateCartCountDisplay(){
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML =";

        let total = 0;
        cart.forEach((item,index)=>{
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML ='<span>${item.name}-$$ {item.price}</span>
            <button class="remove-item" onclick="removeItem(${index})">Remove</button>';
            cartItems.appendChild(div);
            total += item.price;

        });

        document.getElementById('cart-total').textContent = total.toFixed(2);
    }

    function removeItem(index){
        cart.splice(index, 1);
        updateCartCount();
        updateCartDisplay();
    }

    function removeItem(index){
        cart.splice(index, 1);
        updateCartCount();
        updateCartDisplay();
    }

    function checkout(){
        if (cart.length === 0){
            alert('Your cart is empty!');
            return;
        }

        const total = cart.reduce((sum,item) => sum + item.price, 0);
        alert(Thank you for your purchase! total: $${total.toFixed(2)});
        cart = [];
        updateCartCount();
        toggleCart();
    }
</script>