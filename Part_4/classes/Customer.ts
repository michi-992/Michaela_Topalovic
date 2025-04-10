export class Customer {
    constructor(
        private customerId: string,
        private name: string,
        private email: string
    ) {
        this.validateInput();
    }

    public getCustomerInfo(): string {
        const custumerInfo = `Customer ${this.customerId}: ${this.name} <${this.email}>`;
        return custumerInfo;
    };

    public getCostumerId(): string {
        return this.customerId;
    };

    public getName(): string {
        return this.name;
    };

    public getEmail(): string {
        return this.email;
    };

    private validateInput(): void {
        if (!this.customerId || !this.name || !this.email) {
            throw new Error("Customer ID, name, and email are required.");
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            throw new Error("Invalid email format.");
        }
    }
}