export class Customer {
    customerId: string;
    name: string;
    email: string;

    constructor(customerId: string, name: string, email: string) {
        this.customerId = customerId;
        this.name = name;
        this.email = email
    }

    public getCustomerInfo(): string {
        const custumerInfo = "Customer " + this.customerId + ": " + this.name + " <" + this.email+ ">";
        return custumerInfo;
    }
}