--------------------------------------
    Part 2: Classical Unit Testing
--------------------------------------

1. __Define Classes__
The classes Customer, Product and Order for "Part 2" are defined in:
- `Michaela_Topalovic/Part_2/Customer.ts`
- `Michaela_Topalovic/Part_2/Product.ts`
- `Michaela_Topalovic/Part_2/Order.ts`

2. __Write Unit Tests__
The unit tests for the classes for "Part 2" are written in:
- `Michaela_Topalovic/Part_2/__tests__/Customer.test.ts`
    - unit test for creating an instance of the class
    - unit test for testing getCustomerInfo()
- `Michaela_Topalovic/Part_2/__tests__/Product.test.ts`
    - unit test for creating an instance of the class
    - unit test for testing getProductInfo()
- `Michaela_Topalovic/Part_2/__tests__/Order.test.ts`
    - unit test for creating an instance of the class
    - unit test for testing generateOrderSummary()

Data used for the unit tests
- `new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");`
- `new Product("P101", "Laptop Bag", 50.99);`
- `new Order("01001", customer, product, 2);`

3. __Implement the Classes__
Implementation of classes in files as mentioned above in Point 1.