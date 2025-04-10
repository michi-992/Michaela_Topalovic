import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order {
    orderId: string;
    customer: Customer;
    product: Product;
    quantity: number;

    constructor(orderId: string, customer: Customer, product: Product, quantity: number) {
        this.orderId = orderId;
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;
    }

    public generateOrderSummary(): string {
        const customerInfo: string = this.customer.getCustomerInfo();
        const productInfo: string = this.product.getProductInfo(); 
        const totalPrice: number = this.calculateTotalPrice();

        const orderSummary = "Order " + this.orderId + ": " + customerInfo + " purchased " + this.quantity + " x " + productInfo + ". Total: $" + totalPrice;
        return orderSummary;
    }

    calculateTotalPrice(): number {
        return this.quantity * this.product.price;
    }
}