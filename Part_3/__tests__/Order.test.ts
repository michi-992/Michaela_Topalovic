import { Customer } from "../../Part_2/classes/Customer"
import { Product } from "../../Part_2/classes/Product";
import { Order } from "../../Part_2/classes/Order";

describe("Order - Mocked Dependencies", () => {    
    it("should generate correct order summary", () => {
        const mockGetCustomerInfo = jest.fn(() => "Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at>");
        const mockCustomer = {
            getCustomerInfo: mockGetCustomerInfo,
        } as unknown as Customer;
    
        const mockGetProductInfo = jest.fn(() => "Product P101: Laptop Bag ($50.99)");
        const mockProduct = {
            price: 50.99,
            getProductInfo: mockGetProductInfo,
        } as unknown as Product;
        const order = new Order("O1001", mockCustomer, mockProduct, 2);

        const retrievedSummary = order.generateOrderSummary();
        const expectedSummary: string = "Order O1001: Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at> purchased 2 x Product P101: Laptop Bag ($50.99). Total: $101.98";

        expect(retrievedSummary).toBe(expectedSummary);
        expect(mockGetCustomerInfo).toHaveBeenCalled();
        expect(mockGetProductInfo).toHaveBeenCalled();  
        expect(mockCustomer).not.toBeInstanceOf(Customer);
        expect(mockProduct).not.toBeInstanceOf(Product);
    });
})