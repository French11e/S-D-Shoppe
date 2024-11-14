// Handle showing the appropriate payment method form based on the selection
document.getElementById('payment-method').addEventListener('change', function() {
    const paymentMethod = this.value;
    
    // Hide all payment method forms
    document.getElementById('credit-card-form').style.display = 'none';
    document.getElementById('paypal-form').style.display = 'none';
    document.getElementById('cod-form').style.display = 'none';
    document.getElementById('gcash-form').style.display = 'none'; // Hide GCash form initially

    // Show the selected payment method form
    if (paymentMethod === 'credit-card') {
        document.getElementById('credit-card-form').style.display = 'block';
    } else if (paymentMethod === 'paypal') {
        document.getElementById('paypal-form').style.display = 'block';
    } else if (paymentMethod === 'cod') {
        document.getElementById('cod-form').style.display = 'block';
    } else if (paymentMethod === 'gcash') {
        document.getElementById('gcash-form').style.display = 'block'; // Show GCash form
    }
});
