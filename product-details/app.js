    // Initialize Wishlist
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Select DOM elements
    const addToCartButton = document.querySelector(".add-to-cart");
    const quantityCounter = document.querySelector(".count");
    const productName = document.querySelector(".product-name").innerText;
    const productPrice = document.querySelector(".current-price").innerText;
    const productImage = document.querySelector(".main-img img.active").src;
    const absoluteImageUrl = new URL(productImage, window.location.href).href;
    
    
    // Function to update the quantity display
    function updateQuantity(action) {
      let count = parseInt(quantityCounter.innerText);
      if (action === "increase") {
        count++;
      } else if (action === "decrease" && count > 0) {
        count--;
      }
      quantityCounter.innerText = count;
    }
    
    // Attach event listeners for quantity buttons
    document.querySelector(".plus").addEventListener("click", () => updateQuantity("increase"));
    document.querySelector(".minus").addEventListener("click", () => updateQuantity("decrease"));
    
    // Function to add item to wishlist
    function addToWishlist() {
      const quantity = parseInt(quantityCounter.innerText);
    
      if (quantity === 0) {
        alert("Please select a quantity before adding to the wishlist.");
        return;
      }
    
      // Check if item already exists in the wishlist
      const existingItem = wishlist.find(item => item.name === productName);
    
      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity
      } else {
        // Add new item
        wishlist.push({
          name: productName,
          price: productPrice,
          quantity: quantity,
          image: productImage
        });
      }
    
      // Save to localStorage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Item added to wishlist successfully!");
    }
    
    // Attach event listener to the Add to Cart button
    addToCartButton.addEventListener("click", addToWishlist);
    
    // Debugging: Check wishlist contents in the console
    console.log("Current Wishlist:", wishlist);