const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNavAltMarkup')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


//INCREMENT DECREMENT FOR MULIPLE BUTTONS

var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
var addButton = document.getElementsByClassName('add');

//for incrementing value
for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;

        var input = buttonClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}


//for decrementing value
for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var buttonadd = buttonClicked.parentElement.parentElement.children[2]
        var input = buttonClicked.parentElement.children[1];

        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        input.value = newValue;

        if (input.value < 1) {
            buttonadd.classList.remove('hideDisplay')
            counterSelected = buttonadd.parentElement.children[3]
            counterSelected.classList.add('hideDisplay')
        }

    })
}




//--------------------------------------------------------------
//--------------------------------------------------------------




// // cart 
// var itemName, quantity, price;
// //Displaying counter and hidding add button
// for (var i = 0; i < addButton.length; i++) {
//     var button = addButton[i];
//     button.addEventListener('click', function (event) {
//         var buttonClicked = event.target;
//         var counterSelected = buttonClicked.parentElement.children[3]

//         //for incrementing value once the button is clicked
//         buttonClicked.classList.add('hideDisplay');
//         counterSelected.classList.remove('hideDisplay');
//         input = counterSelected.children[1];
//         input.value = 1;

//         // cart
//         parentCard = buttonClicked.parentElement
//         itemName = parentCard.children[0].innerText;
//         price = parentCard.children[1].innerText;
//         quantity = input.value;
//         console.log(itemName)
//         console.log(price)
//         console.log("Quantity=" + quantity)
//         appendToCart();
//     })
// }
// var customBtn = document.getElementsByClassName('customBtn');
// for (var i = 0; i < customBtn.length; i++) {
//     var incDecButton = customBtn[i];
//     incDecButton.addEventListener('click', (event) => {
//         quantity = input.value;
//         console.log("Quantity=" + quantity)
//         // setQuantity();
//         appendToCart();
//     })

// }

// //Appending new items in cart

// var table = document.getElementById('table');
// var count = 0;
// function appendToCart() {
//     // var tr = document.createElement("tr");
//     // var listItem = document.createElement(`<tr><th scope='col'>1</th> 
//     // <th scope='col'>${itemName}</th>
//     // <th scope='col'>${quantity}</th>
//     // <th scope='col'>${price}</th>
//     // <th scope='col'>Remove</th></tr>`);
//     // table.append(listItem);
//     ++count
//     var row = table.insertRow(-1);

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell5 = row.insertCell(4);


//     cell1.innerHTML = count;
//     cell2.innerHTML = itemName;
//     cell3.innerHTML = quantity;
//     cell4.innerHTML = price;
//     cell5.innerHTML = `<button class='removeButton' id=${count} >` + `remove` + `</button>`;


//     removeBtn = document.getElementsByClassName('removeButton');
//     for (var i = 0; i < removeBtn.length; i++) {
//         var removeButton = removeBtn[i];
//         removeButton.addEventListener('click', (event) => {
//             console.log(removeButton.id)
//             table.deleteRow(removeButton.id)
//         })

//     }


// }



// function setQuantity() {
//     cell3.innerHTML = quantity;
// }
// // Deleting row using sr number Sr number available in count
// function removeRow(count) {
//     table.deleteRow(count);
// }



//--------------------------------------------------------------
//--------------------------------------------------------------

//New cart

// if (localStorage.getItem('cart') == null) {
//     var cart = {};
// }
// else {
//     cart = JSON.parse(localStorage.getItem('cart'))
// }

// $('.cart').click(function () {
//     console.log("clicked")
//     var idstr = this.id.toString();
//     console.log(idstr)
//     if (cart[idstr] != undefined) {
//         cart[idstr] = cart[idstr] + 1;
//     }
//     else {
//         cart[idstr] = 1;
//     }
//     console.log(cart)

//     // console.log(this.parentElement.children[0].innerHTML)

//     localStorage.setItem('cart', JSON.stringify(cart))
// });



addToCart = document.getElementsByClassName('cart');
for (var i = 0; i < addToCart.length; i++) {
    var button;
    button = addToCart[i];
    button.addEventListener('click', updateCartContainer);

}
function updateCartContainer(e) {
    currentAddToCartBtn = e.target
    productContainer = currentAddToCartBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('card-title')[0].innerText;
    productPrice = productContainer.getElementsByClassName('card-price')[0].innerText;


    cartTitle = cartContainer.getElementsByClassName('cart-title');
    var quantity;
    for (var i = 0; i < cartTitle.length; i++) {
        // console.log(cartTitle[i].innerText.trim())
        // console.log(productTitle)
        if (cartTitle[i].innerText.trim() == productTitle) {
            // quantity = quantity + 1;
            // return quantity;
            return;
        }
        // else {
        //     quantity = 1;
        // }

    }
    // console.log(productPrice)
    addNewRowInCart(productTitle, productPrice, quantity);

    var totalPrice = 0;

    cartPrice = cartContainer.getElementsByClassName('cart-price');
    for (var i = 0; i < cartPrice.length; i++) {
        totalPrice = totalPrice + parseInt(cartPrice[i].innerText);
        // console.log(cartPrice[i].innerText)
    }
    console.log(totalPrice)
    document.getElementsByClassName('total')[0].innerText = "Total Amount: " + new Number(totalPrice).toLocaleString();
}

cartContainer = document.getElementsByClassName('cartContainer')[0];

function addNewRowInCart(productTitle, productPrice, quantity) {
    div = document.createElement('div');
    div.classList.add('row');

    insideDiv = `<div class="col-3 cart-title">
            ${productTitle}
    </div>
    <div class="col-3 cart-price">
        ${productPrice}
    
    </div> 
    <div class="col-3 cart-quantity">
        <input class="quantity" type="number" value="1" name="quantity">
    
    </div> 
    <div class="col-3 removeButton">
    <button class="btn-primary">Remove</button>
    </div> <br><br>`;

    div.innerHTML = insideDiv;
    cartContainer.appendChild(div);

    removeBtn = document.getElementsByClassName('removeButton')
    for (var i = 0; i < removeBtn.length; i++) {
        var removeButton = removeBtn[i];
        removeButton.addEventListener('click', removeFromCart)
    }

    function removeFromCart(e) {
        e.target.parentElement.parentElement.remove();
        updatePrice();
    }
    function updatePrice() {
        total = 0;
        cartPrice = cartContainer.getElementsByClassName('cart-price');
        for (var i = 0; i < cartPrice.length; i++) {
            price = cartPrice[i].innerText;
            total = total + parseInt(price);
        }
        document.getElementsByClassName('total')[0].innerText = "Total Amount: " + new Number(total).toLocaleString();
    }
}
