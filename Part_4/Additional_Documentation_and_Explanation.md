-----------------------------------------------------------
    Part 4: Refactoring Practice & Optional Extensions
-----------------------------------------------------------

Steps:
1. __Refactor Order to Use Dependency Injection__
    - I had this already implemented from the start.

-----------------------------------------------------------------------------------------------------------------------------

2. __Extract Logic into Helper Methods__
    - I have done so in `Michaela_Topalovic/Part_4/classes/Order.ts`.

I had always extracted the calculation of the total price into its own method (now renamed to `getTotalPrice()` for consistency). Now I have also extracted the generation into a private method which only gets called by the public method used to get the order summary. It improves readability and aligns with SRP. The unit tests were refactored accordingly.

```ts
    public getOrderSummary(): string {
        return this.generateSummary();
    }

    private generateSummary(): string {
        // generating logic
    }

    private getTotalPrice(): string {
        // calculation and conversion logic
    }
```

-----------------------------------------------------------------------------------------------------------------------------


3. __Add Validation__
I have added a method for validation to insure objects of class `Order` to be valid when instantiated. The method which gets called in the constructor and can throw an error. Besides improving robustness, having them in one centralized place also improves readability.
```ts
    constructor(
        // properties
    ) {
        this.validateInputs();
    }

    private validateInputs(): void {
        if (!this.customer) {
            throw new Error("Invalid customer provided.");
        }

        if (!this.product) {
            throw new Error("Invalid product provided.");
        }

        if (!Number.isInteger(this.quantity) || this.quantity <= 0) {
            throw new Error("Quantity must be a positive integer.");
        }
    }
```

-----------------------------------------------------------------------------------------------------------------------------


4. __Refactor Tests__
- I have updted the initial test (the one with mocks) to call the renamed method of the `Order` class.

```ts
    // old
    const retrievedSummary = order.generateOrderSummary();

    // new 
    const retrievedSummary = order.getOrderSummary();
```

- Moved the mocks out of the function to be available/reusable across other tests in the test suite.
- I have added the unit tests for cases of costumer or product being null and an additional unit test for an invalid quantity. I am still using mocking for the tests of the `Order` class. 

```ts
    // e.g. 
    it("should throw error for zero quantity", () => {
        expect(() => new Order("O1001", mockCustomer, mockProduct, 0)).toThrow("Quantity must be a positive integer.");
    });
```


-----------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------


__Additional Refactoring / Optional Extensions__
1. __General Refactor__
I have refactored `getCustomerInfo()`, `getProductInfo()` and `generateSummary()` (formerly `generateOrderSummary()`) to use template literals instead of string concatenation for better readability and conciseness as it supports complex string formatting more naturally.
```ts
    // e.g. Coustomer - old
    const custumerInfo = "Customer " + this.customerId + ": " + this.name + " <" + this.email+ ">";

    // e.g. Coustomer - new
    const custumerInfo = `Customer ${this.customerId}: ${this.name} <${this.email}>`;
```

-----------------------------------------------------------------------------------------------------------------------------


2. __General Refactor__
I have refactored to use the constructor property shorthand, as it improves code readability and removes boilerplate. I have also made the properties private (and implemented getters), as it enforces encapsulation.
    - used the getter for `Product`'s `getPrice()` in the `Order` class to calculate the price (formatted so there are no floating point issues).
    ```ts
    private getTotalPrice(): string {
        return (this.quantity * this.product.getPrice()).toFixed(2);
    }
    ```
    - mocked the getter in the `Order.test.ts` file through `jest.fn()` and made sure it was called/used
    ```ts
    const mockGetPrice = jest.fn(() => 50.99);

    expect(mockGetPrice).toHaveBeenCalled();
    ```

-----------------------------------------------------------------------------------------------------------------------------


3. __Refactoring of `Customer` class__

I have added validation for required properties and for valid customer emails as well as unit tested those (`expect().toThrow()`). Prevents invalid or incomplete customer data from being used.
```ts
    // Inside te Customer class:
    constructor(
        // properties
    ) {
        this.validateInput();
    }

    private validateInput(): void {
        if (!this.customerId || !this.name || !this.email) {
            throw new Error("Customer ID, name, and email are required.");
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            throw new Error("Invalid email format.");
        }
    }
```
```ts
    it("should throw error for any missing properties", () => {
        expect(() => new Customer(null as any, "Michaela Topalovic", "cc221043@fhstp.ac.at")).toThrow("Customer ID, name, and email are required.");
        // ...
    });

    it("should throw error for invalid email", () => {
        expect(() => new Customer("C001", "Michaela Topalovic", "invalid-email")).toThrow("Invalid email format.");
    });
```

-----------------------------------------------------------------------------------------------------------------------------


4. __Refactoring of `Product` class__

I have added validation for required properties and valid price as well as unit tested those (`expect().toThrow()`). Prevents invalid, incomplete or illogical product data from being used.
```ts
    // Inside te Product class:
    constructor(
        // properties
    ) {
        this.validateInput();
    }

    private validateInput(): void {
        if (!this.productId || !this.name || typeof this.price !== "number") {
            throw new Error("Product ID, name, and price are required.");
        }
    
        if (this.price <= 0) {
            throw new Error("Product price must be greater than 0.");
        }
    }
```

```ts
    it("should throw error for anymissing properties", () => {
        expect(() => new Product(null as any, "Laptop Bag", 50.99)).toThrow("Product ID, name, and price are required.");
        // ...
    });

    it("should throw error for negative price", () => {
        expect(() => new Product("P001", "Laptop Bag", -10)).toThrow("Product price must be greater than 0.");
    });
```