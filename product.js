// product image zoom
const zoomContainer = document.getElementById('zoom-container');
const zoomImage = document.getElementById('zoom-image');

zoomContainer.addEventListener('mouseenter', () =>{
    zoomImage.style.transform = 'scale(1.5)';

});
zoomContainer.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'scale(1)';
})

const backToTop = document.querySelector(".foot-panel1")
backToTop.addEventListener("click", ()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

// Adding product to localstorage
    
    function addToCart() {
        var productName = document.getElementById("name").innerText;
        var productPrice = document.getElementById("price").innerText;
        var productImage = document.getElementById("zoom-image").innerText;

        var product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        var productJSON = JSON.stringify(product);           
        var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push(productJSON);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert("Product added to the cart!");
        window.open("cart.html")
    }

// taking data from local storage
