import { Customer } from "../classes/Customer";

describe("Customer - Refactor", () => {
    it("should  create a customer instance", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        expect(customer).toBeInstanceOf(Customer);
    });

    it("should return correct customer information", () => {
        const customer = new Customer("123", "Michaela Topalovic", "cc221043@fhstp.ac.at");
        expect(customer.getCustomerInfo()).toBe("Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at>")
    });

    it("should throw error for any missing properties", () => {
        expect(() => new Customer(null as any, "Michaela Topalovic", "cc221043@fhstp.ac.at")).toThrow("Customer ID, name, and email are required.");
        expect(() => new Customer("123", null as any, "cc221043@fhstp.ac.at")).toThrow("Customer ID, name, and email are required.");
        expect(() => new Customer("123", "Michaela Topalovic", null as any)).toThrow("Customer ID, name, and email are required.");
    });

    it("should throw error for invalid email", () => {
        expect(() => new Customer("C001", "Michaela Topalovic", "invalid-email")).toThrow("Invalid email format.");
    });
})