let currentColorIndex = 0;
const colors = [
    "/Assets/fabrics/gingham-blue.jpg", // Blue
    "/Assets/fabrics/gingham-pink.jpg", // Pink
    "/Assets/fabrics/gingham-purple.jpg", // Purple
    "/Assets/fabrics/gingham-orange.jpg", // Orange
    "/Assets/fabrics/gingham-yellow.jpg" // Yellow
];

// Function to change the product image based on the selected color
function changeColor(index) {
    currentColorIndex = index;
    const productImage = document.querySelector(".product-image img");
    productImage.src = colors[index];
}

// Functions for previous and next buttons
function prevColor() {
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    changeColor(currentColorIndex);
}

function nextColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    changeColor(currentColorIndex);
}

// Initial display of the first color
window.onload = function() {
    changeColor(currentColorIndex);
}

// Add event listener for keydown events
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        prevColor(); // Go to previous color
    } else if (event.key === "ArrowRight") {
        nextColor(); // Go to next color
    }
});

