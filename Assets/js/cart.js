// Select all checkboxes
document.getElementById('select-all').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// Remove selected items
document.getElementById('remove-selected').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('.item-checkbox:checked');
    checkboxes.forEach(checkbox => {
        checkbox.closest('tr').remove();
    });
    updateTotal(); // Call to update total after removal
});

// Function to update total price (You can adjust this logic based on your needs)
function updateTotal() {
    const totalPrices = document.querySelectorAll('.item-total-price');
    let subtotal = 0;
    totalPrices.forEach(price => {
        const priceText = price.textContent.replace('$', '');
        subtotal += parseFloat(priceText);
    });
    document.querySelector('.fw-bold').textContent = `$${subtotal.toFixed(2)}`;
}