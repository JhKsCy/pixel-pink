const buttons = document.querySelectorAll('.size-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
        
        // Add the 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

let quantity = 0;

function changeQuantity(amount) {
    if (quantity + amount >= 0) {
        quantity += amount;
        document.getElementById('quantity').textContent = quantity;
    }
}