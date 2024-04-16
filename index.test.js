const { multiplication, concatOdds, ShoppingCart } = require("./index.js");

describe("let multiple", () => {
  test("multiple two numbers to return a single value", () => {
    expect(multiplication(2, 3)).toBe(6);
  });
});

describe("let concat", () => {
  test("add two arrays, get odds only, ascending order", () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([
      -1, 1, 3, 9, 15,
    ]);
  });
});

describe("shoppingCart", () => {
  const shoppingCartInstance = new ShoppingCart({ cart: {}, loggedIn: false });

  test("adding to cart", () => {
    expect(shoppingCartInstance.addProduct({ name: "Joe", price: 40 })).toEqual(
      { name: "Joe", price: 40 }
    );
    expect(shoppingCartInstance.addProduct()).toBe(
      "Please add a valid product"
    );
    expect(shoppingCartInstance.addProduct({ name: 12, price: 20 })).toEqual(
      "Please add a valid product"
    );
  });

  test("Cart empty?", () => {
    expect(shoppingCartInstance.isCartEmpty(false)).toEqual(false);
  });

  test("showItems", () => {
    shoppingCartInstance.products = [];
    const Emptyresults = shoppingCartInstance.showItems();
    expect(Emptyresults).toBe("Your cart is empty");

    const item = { name: "Roy", price: 212 };
    const addedProducts = shoppingCartInstance.addProduct(item);

    const cartWithItemsResults = shoppingCartInstance.showItems();

    expect(addedProducts).toEqual(item);

    // expect(cartWithItemsResults).toContain(`${item.name}, $${item.price}`);
  });

  test("payment processing", () => {
    const payment = shoppingCartInstance.processPayment("345656");
    const correctPayment = shoppingCartInstance.processPayment("123456789012");
    expect(payment).toBe("Invalid card number");
    expect(correctPayment).toBe("Successful");
  });
});
