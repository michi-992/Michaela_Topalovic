import { Product } from "../classes/Product";

describe("Product - Refactor", () => {
    it("should  create a product instance", () => {
        const product = new Product("P101", "Laptop Bag", 50.99);
        expect(product).toBeInstanceOf(Product);
    });

    it("should return correct product information", () => {
        const product = new Product("P101", "Laptop Bag", 50.99);
        expect(product.getProductInfo()).toBe("Product P101: Laptop Bag ($50.99)")
    })

    it("should throw error for any missing properties", () => {
        expect(() => new Product(null as any, "Laptop Bag", 50.99)).toThrow("Product ID, name, and price are required.");
        expect(() => new Product("P001", null as any, 50.99)).toThrow("Product ID, name, and price are required.");
        expect(() => new Product("P001", "Laptop Bag", null as any)).toThrow("Product ID, name, and price are required.");
    });

    it("should throw error for negative price", () => {
        expect(() => new Product("P001", "Laptop Bag", -10)).toThrow("Product price must be greater than 0.");
    });
})