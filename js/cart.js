

// My shopping cart


$(document).ready(function () {

    updateCartTotal();

    var removeCartItemButton = $(".remove-btn");
    for (let index = 0; index < removeCartItemButton.length; index++) {
        var button = removeCartItemButton[index];
        button.addEventListener('click', removeCartItem);
    }

    // add to cart
    var addToCartButton = $(".my-add-to-cart-btn");
    for (let index = 0; index < addToCartButton.length; index++) {
        var button = addToCartButton[index];
        button.addEventListener('click', addToCartButtonClicked);
    }

    var addToCartButtonProductPage = $(".my-product-pg-add-to-cart-btn");
    for (let index = 0; index < addToCartButtonProductPage.length; index++) {
        var button = addToCartButtonProductPage[index];
        button.addEventListener('click', addToCartButtonProductPageClicked);
    }



    document.getElementsByClassName("checkout-btn")[0].addEventListener('click', checkoutButtonClicked);

    countCartItems();

});


function addToCartButtonProductPageClicked(event) {
    var clickedButton = event.target;
    var product = clickedButton.parentElement.parentElement.parentElement.parentElement.parentElement;

    var imgSrc = product.getElementsByClassName("product-banner-img")[0].src;
    var ProductTitle = product.getElementsByClassName("product-info-title")[0].innerText;
    var price = parseFloat(product.getElementsByClassName("product-info-price")[0].innerText.replace('$', ''));
    console.log(imgSrc, ProductTitle, price);
    addToShoppingCart(imgSrc, ProductTitle, price);
    updateCartTotal();
};

function countCartItems() {
    var badge = $("#my-badge")[0];
    var cartItemNumber = $(".cart-items")[0].childElementCount;
    console.log(badge, cartItemNumber);
    badge.innerText = cartItemNumber;
};

function checkoutButtonClicked(event) {
    var cartItem = $(".cart-items")[0];
    if (cartItem.hasChildNodes() == false) {
        alert('Nothing to purchase');
    }
    else {
        alert('Thank you for your purchase');
        while (cartItem.hasChildNodes()) {
            cartItem.removeChild(cartItem.firstChild);
        };
        updateCartTotal();
        countCartItems();
    }


};

function addToCartButtonClicked(event) {
    var clickedButton = event.target;
    var product = clickedButton.parentElement.parentElement.parentElement.parentElement;

    var imgSrc = product.getElementsByClassName("product-banner-img")[0].src;
    var ProductTitle = product.getElementsByClassName("product-info-title")[0].innerText;
    var price = parseFloat(product.getElementsByClassName("product-info-price")[0].innerText.replace('$', ''));
    // console.log(imgSrc, ProductTitle, price);
    addToShoppingCart(imgSrc, ProductTitle, price);
    updateCartTotal();
};

function addToShoppingCart(imgSrc, ProductTitle, price) {
    var cartItem = $(".cart-items")[0];
    var cartRow = document.createElement('div');
    cartRow.classList.add("cart-row");

    // Tranh bi trung lap san pham khi them vao gio hang

    // var cartImgs = cartItem.getElementsByClassName("cart-item-image");
    // for (let index = 0; index < cartImgs.length; index++) {
    //     var cartImgSrc = cartImgs[index].src;
    //     console.log(cartImgSrc);
    //     if (cartImgSrc == imgSrc) {
    //         alert('This item is already added to the cart');
    //         return;
    //     }
    // }

    var cartRowContent = `
        <div class="cart-item-info">
            <img class="cart-item-image" src="${imgSrc}" alt="">
            <span class="cart-item-title">${ProductTitle}</span>
        </div>
        <span class="cart-price">$${price}</span>
        <div class="cart-quantity-box">
            <input class="cart-input-number" type="number" value="1" min="1" />
        </div>
        <div class="cart-remove-btn">
            <button class="btn btn-danger remove-btn">Remove</button>
        </div>`;
    cartRow.innerHTML = cartRowContent;
    cartItem.append(cartRow);
    var removeButtons = $(".remove-btn");
    for (let index = 0; index < removeButtons.length; index++) {
        var button = removeButtons[index];
        button.addEventListener('click', removeCartItem);
    };
    var quantityInputs = $(".cart-input-number");
    for (let index = 0; index < quantityInputs.length; index++) {
        var input = quantityInputs[index];
        input.addEventListener('change', changedInput);
    }
    countCartItems();
};

function changedInput(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    };
    updateCartTotal();
};

function removeCartItem(event) {
    var clickedButton = event.target;
    clickedButton.parentElement.parentElement.remove();
    updateCartTotal();
    countCartItems();
};

function updateCartTotal() {
    var cartItemContainer = $(".cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (let index = 0; index < cartRows.length; index++) {
        var cartRow = cartRows[index];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-input-number")[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = parseInt(quantityElement.value);
        total = total + (price * quantity);
    };
    total = Math.round(total * 100) / 100;
    $(".modal-total-price")[0].innerText = total + '$';
};



