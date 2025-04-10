import { Customer } from "../classes/Customer";

describe("Customer", () => {
    it("should  create a customer instance", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        expect(customer).toBeInstanceOf(Customer);
    });

    it("should return correct customer information", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        expect(customer.getCustomerInfo()).toBe("Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at>")
    });
})