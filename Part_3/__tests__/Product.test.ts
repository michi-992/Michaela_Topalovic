import { Product } from "../classes/Product";

describe("Product", () => {
    it("should  create a product instance", () => {
        const product = new Product("P101", "Laptop Bag", 50.99);
        expect(product).toBeInstanceOf(Product);
    });

    it("should return correct product information", () => {
        const product = new Product("P101", "Laptop Bag", 50.99);
        expect(product.getProductInfo()).toBe("Product P101: Laptop Bag ($50.99)")
    })
})