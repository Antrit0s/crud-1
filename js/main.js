var pN = document.getElementById("ProductName");
var pP = document.getElementById("ProductPrice");
var pC = document.getElementById("ProductCategory");
var pD = document.getElementById("productDesc");
var row = document.getElementById("row");
var pList = [];

// Check if 'products' exists in localStorage
if (localStorage.getItem('products') !== null) {
    pList = JSON.parse(localStorage.getItem('products')); // Corrected the key here
    display();
}

// Function to add a new product
function addProduct() {
    if (pN.value == '' || pP.value == '') return; // Check if mandatory fields are empty

    // Create a new product object
    var product = {
        pName: pN.value,
        pPrice: pP.value,
        pCat: pC.value,
        pDesc: pD.value
    };

    clearInput(); // Clear the input fields after adding the product
    console.log(product);

    pList.push(product); // Add the new product to the list
    localStorage.setItem("products", JSON.stringify(pList)); // Update localStorage with the new list
    display(); // Update the displayed product list
}

// Function to display the product list
function display() {
    var cartona = ''; // Initialize the HTML string

    // Loop through the product list and create HTML for each product
    for (var i = 0; i < pList.length; i++) {
        cartona += `<div class="col-md-4">
                        <div class="inner rounded-3 overflow-hidden">
                            <img src="imgs/photo-1421930866250-aa0594cea05c.jfif" class="w-100" alt="tree">
                            <h2 class="h4">${pList[i].pName}</h2>
                            <span class="badge bg-primary my-2">${pList[i].pCat}</span>
                            <p>${pList[i].pDesc}</p>
                            <span class="mb-2 fs-4 text-danger-emphasis">${pList[i].pPrice}$</span>
                            <button class="btn btn-outline-dark w-100 mb-3" onclick="updateProduct(${i})">Update</button>
                            <button class="btn btn-outline-danger w-100" onclick="deleteProduct(${i})">Delete</button>
                        </div>
                    </div>`;
    }

    // Update the row with the generated HTML
    row.innerHTML = cartona;
}

// Function to clear input fields
function clearInput() {
    pN.value = "";
    pC.value = "";
    pD.value = "";
    pP.value = "";
}

// Functions for update and delete (for completeness)
function updateProduct(index) {
    // Implementation of product update functionality
}

function deleteProduct(index) {
    pList.splice(index, 1); // Remove the product from the list
    localStorage.setItem("products", JSON.stringify(pList)); // Update localStorage
    display(); // Refresh the displayed list
}
