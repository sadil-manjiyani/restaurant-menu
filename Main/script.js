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

// cart 
var itemName, quantity, price;
//Displaying counter and hidding add button
for (var i = 0; i < addButton.length; i++) {
    var button = addButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var counterSelected = buttonClicked.parentElement.children[3]

        //for incrementing value once the button is clicked
        buttonClicked.classList.add('hideDisplay');
        counterSelected.classList.remove('hideDisplay');
        input = counterSelected.children[1];
        input.value = 1;

        // cart
        parentCard = buttonClicked.parentElement
        itemName = parentCard.children[0].innerText;
        price = parentCard.children[1].innerText;
        quantity = input.value;
        console.log(itemName)
        console.log(price)
        console.log("Quantity=" + quantity)
        appendToCart();
    })
}
var customBtn = document.getElementsByClassName('customBtn');
for (var i = 0; i < customBtn.length; i++) {
    var incDecButton = customBtn[i];
    incDecButton.addEventListener('click', (event) => {
        quantity = input.value;
        console.log("Quantity=" + quantity)

    })

}

//Appending new items in cart

var table = document.getElementById('table');
var count = 0;
function appendToCart() {
    // var tr = document.createElement("tr");
    // var listItem = document.createElement(`<tr><th scope='col'>1</th> 
    // <th scope='col'>${itemName}</th>
    // <th scope='col'>${quantity}</th>
    // <th scope='col'>${price}</th>
    // <th scope='col'>Remove</th></tr>`);
    // table.append(listItem);
    ++count
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell1.innerHTML = count;
    cell2.innerHTML = itemName;
    cell3.innerHTML = quantity;
    cell4.innerHTML = price;
    cell5.innerHTML = "<button class='removeButton' >" + "remove" + "</button>"



}

// // Deleting row using sr number Sr number available in count
// function removeRow(count) {
//     table.deleteRow(count);
// }


