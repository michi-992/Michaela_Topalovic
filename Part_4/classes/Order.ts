import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order {
    constructor(
        private orderId: string,
        private customer: Customer,
        private product: Product,
        private quantity: number
    ) {
        this.validateInputs();
    }

    public getOrderSummary(): string {
        return this.generateSummary();
    }

    private generateSummary(): string {
        const customerInfo: string = this.customer.getCustomerInfo();
        const productInfo: string = this.product.getProductInfo(); 
        const totalPrice: string = this.getTotalPrice();

        const orderSummary = `Order ${this.orderId}: ${customerInfo} purchased ${this.quantity} x ${productInfo}. Total: $${totalPrice}`;
        return orderSummary;
    }

    private getTotalPrice(): string {
        return (this.quantity * this.product.getPrice()).toFixed(2);
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
}