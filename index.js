function multiplication(a, b) {
  return a * b;
}

function concatOdds(array1, array2) {
  let results = [];
  let newArray = array1.concat(array2);
  let oddNumbers = newArray.filter(item => item % 2 !== 0);
  let sortNumbers = oddNumbers.sort((a, b) => a - b);
  for (let i = 0; i < sortNumbers.length; i++) {
    if (sortNumbers[i] !== sortNumbers[i + 1]) {
      results.push(sortNumbers[i]);
    }
  }
  return results;
}

// ----------------------------- Shopping Car ---------------------------------
class ShoppingCart {
  constructor() {
    this.products = [];
    this.isLoggedIn = false;
  }

  //adding products to cart
  addProduct(product) {
    if (
      typeof product?.name === "string" &&
      typeof product?.price === "number"
    ) {
      this.products.push(product);
      return product;
    } else {
      return "Please add a valid product";
    }
  }

  //check to see if the cart is empty
  isCartEmpty() {
    return this.products.length === 0;
  }

  //display the cart's contents
  showItems() {
    if (this.isCartEmpty()) {
      return "Your cart is empty";
    } else {
      console.log("Cart Contents:");
      this.products.forEach((product, index) => {
        return `${index + 1}: ${product.name} - $${product.price}`;
      });
    }
  }

  //initiates the checkout process
  checkout() {
    if (this.isCartEmpty()) {
      console.log(
        "Your cart is empty. Please add some products before checking out."
      );
      return;
    }

    // let userAction = prompt("Do you want to checkout as a guest or log in?");

    // if (userAction === "guest") {
    //   let guestDecision = prompt(
    //     "Would you like to create an account for easier checkout next time? (Yes/No)"
    //   );
    //   if (guestDecision === "yes") {
    //     console.log("Redirecting to account creation...");
    //   } else {
    //     console.log("Proceeding as guest...");
    //     this.processPayment();
    //   }
    // } else if (userAction === "login") {
    //   console.log("Redirecting to login...");
    //   this.isLoggedIn = true;
    //   this.processPayment();
    // } else {
    //   console.log("Invalid action. Checkout aborted.");
    // }
  }

  processPayment(card) {
    if (card.length !== 12) {
      return "Invalid card number";
    } else {
      return "Successful";
    }
  }
}

console.log(multiplication(3, 2));
console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));

const cart = new ShoppingCart();
console.log(cart.addProduct({ name: "T-Shirt", price: 20 }));
console.log(cart.isCartEmpty());
console.log(cart.showItems());
console.log(cart.checkout());
// cart.addProduct({ name: "Jeans", price: 40 });

module.exports = { multiplication, concatOdds, ShoppingCart };
