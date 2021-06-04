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

    })
}