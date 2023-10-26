
// Function to calculate the total amount and apply discounts
function calculateTotal() {
    // Item details
    const item1Price = 100;
    const item2Price = 150;
    const item3Price = 50;

    // Get quantities
    const quantity1 = parseInt(document.getElementById("quantity1").value);
    const quantity2 = parseInt(document.getElementById("quantity2").value);
    const quantity3 = parseInt(document.getElementById("quantity3").value)

    // Calculate amounts
    const amount1 = quantity1 * item1Price;
    const amount2 = quantity2 * item2Price;
    const amount3 = quantity3 * item3Price;

    // Display amounts
    document.getElementById("amount1").textContent = amount1;
    document.getElementById("amount2").textContent = amount2;
    document.getElementById("amount3").textContent = amount3;
    // Calculate total amount
    const totalAmount = amount1 + amount2 + amount3;

    // Apply discounts
    let discount = 0;
    if (totalAmount > 2000) {
        discount = 25 / 100;
    } else if (totalAmount > 1800) {
        discount = 20 / 100;
    } else if (totalAmount > 1500) {
        discount = 15 / 100;
    } else if (totalAmount > 1000) {
        discount = 10 / 100;
    }

    // Calculate discounted amount
    let discountedAmount = totalAmount - (totalAmount * (discount));
    if (totalAmount <= 1000) {
        discountedAmount = 0
    }
    // Display total and discount
    document.getElementById("totalCost").innerHTML = totalAmount
    document.getElementById("total").textContent = discountedAmount;
    document.getElementById("discount").textContent = (discount * 100) + "%";
}

// Attach the calculateTotal function to input change events
const quantityInputs = document.querySelectorAll('input[type="number"]');
quantityInputs.forEach(input => {
    input.addEventListener('input', calculateTotal);
});
