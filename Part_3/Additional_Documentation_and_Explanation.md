-----------------------------------
    Part 3: Mocking Techniques
-----------------------------------

This file is used for explaining how mocking was used to isolate `Order` from its dependencies. The only changed code from 'Part 2' to 'Part 3' is found in `Michaela_Topalovic/Part_3/__tests__Order.ts`.

In the test for the `Order` class, I wanted to make sure I was only testing the logic inside `Order` itself  without being affected by how `Customer` or `Product` are implemented, which is why we are suppsed to use mocking in this Part.

- __ARRANGE__

Instead of creating real instances of the `Customer` and `Product` classes, I created `mockCustomer` and `mockProduct` objects. These are just plain JS objects that mimic the real classes. I used the main functionality for mocking with jest, `jest.fn()`, to define their methods. For example, I mocked `getCustomerInfo` to return a fixed string that represents customer info, and I did the same for `getProductInfo` as seen in the code snippets below. Since the `price` of the `Product` is needed inside the `Order` class as well, I had to assign a value for it for `mockProduct` as well. By doing this, I was able to control exactly what the Order class received from its dependencies.
I used type assertions (e.g. `as unknown as Customer`) to tell TypeScript that the mock objects are supposed to behave like real instances of the classes. This allowed them to be used in the costructor of the `Order` class.

```ts
    cconst mockGetCustomerInfo = jest.fn(() => "Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at>");
    const mockCustomer = {
        getCustomerInfo: mockGetCustomerInfo,
    } as unknown as Customer;
```

```ts
    const mockGetProductInfo = jest.fn(() => "Product P101: Laptop Bag ($50.99)");
    const mockProduct = {
        price: 50.99,
        getProductInfo: mockGetProductInfo,
    } as unknown as Product;
```
```ts
    const order = new Order("O1001", mockCustomer, mockProduct, 2);
```
--------------------------------------------------------------------------------------------------------------------------------------------

- __ACT__

This code stayed the same from 'Part 2' to 'Part 3':
```ts 
    const retrievedSummary = order.generateOrderSummary();
```
--------------------------------------------------------------------------------------------------------------------------------------------

- __ASSERT__

The code that remained the same for testing the `Order` class moving from 'Part 2' to 'Part 3' to test `generateOrderSummary()`:
```ts
    const expectedSummary: string = "Order O1001: Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at> purchased 2 x Product P101: Laptop Bag ($50.99). Total: $101.98";
    expect(retrievedSummary).toBe(expectedSummary);
```

I also used jest's matchers like `toHaveBeenCalled()` to make sure the mocked methods were actually used during the test:
```ts
    expect(mockGetCustomerInfo).toHaveBeenCalled();
    expect(mockGetProductInfo).toHaveBeenCalled();
```

And just to be extra sure the mocks weren’t real class instances, I added checks with `not.toBeInstanceOf`:
```ts
    expect(mockCustomer).not.toBeInstanceOf(Customer);
    expect(mockProduct).not.toBeInstanceOf(Product);
```


Overall, mocking helped me keep the test focused purely on the behavior of the Order class, and made it easier to verify that it was working correctly without being tightly coupled to other classes, thus isolating it.