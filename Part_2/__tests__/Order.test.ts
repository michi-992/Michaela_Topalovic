import { Customer } from "../classes/Customer"
import { Product } from "../classes/Product";
import { Order } from "../classes/Order";

describe("Order", () => {
    it("should  create an order instance", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        const product = new Product("P101", "Laptop Bag", 50.99);
        const order = new Order("01001", customer, product, 2);
        expect(order).toBeInstanceOf(Order);
    });

    it("should generate correct order summary", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        const product = new Product("P101", "Laptop Bag", 50.99);
        const order = new Order("O1001", customer, product, 2);

        const retrievedSummary = order.generateOrderSummary();
        const expectedSummary: string = "Order O1001: Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at> purchased 2 x Product P101: Laptop Bag ($50.99). Total: $101.98";

        expect(retrievedSummary).toBe(expectedSummary);
    })
})