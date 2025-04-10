export class Product {
    constructor(
        private productId: string,
        private name: string,
        private price: number
    ) {
        this.validateInput();
    }

    public getProductInfo(): string {
        const productInfo = `Product ${this.productId}: ${this.name} ($${this.price})`;
        return productInfo;
    }

    public getProductId(): string { return this.productId; }

    public getName(): string { return this.name; }

    public getPrice(): number { return this.price; }

    private validateInput(): void {
        if (!this.productId || !this.name || typeof this.price !== "number") {
            throw new Error("Product ID, name, and price are required.");
        }
    
        if (this.price <= 0) {
            throw new Error("Product price must be greater than 0.");
        }
    }
}