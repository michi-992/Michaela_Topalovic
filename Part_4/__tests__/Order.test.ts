import { Customer } from "../classes/Customer"
import { Product } from "../classes/Product";
import { Order } from "../classes/Order";

describe("Order - Refactor", () => {

    const mockGetCustomerInfo = jest.fn(() => "Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at>");
    const mockCustomer = {
        getCustomerInfo: mockGetCustomerInfo,
    } as unknown as Customer;
        
    const mockGetProductInfo = jest.fn(() => "Product P101: Laptop Bag ($50.99)");
    const mockGetPrice = jest.fn(() => 50.99);
    const mockProduct = {
        getPrice: mockGetPrice,
        getProductInfo: mockGetProductInfo,
    } as unknown as Product;
    
    it("should generate correct order summary", () => {
        const order = new Order("O1001", mockCustomer, mockProduct, 2);
        const retrievedSummary = order.getOrderSummary();
        const expectedSummary: string = "Order O1001: Customer 123: Michaela Topalovic <cc221043@fhstp.ac.at> purchased 2 x Product P101: Laptop Bag ($50.99). Total: $101.98";
    
        expect(retrievedSummary).toBe(expectedSummary);
        expect(mockGetCustomerInfo).toHaveBeenCalled();
        expect(mockGetProductInfo).toHaveBeenCalled();  
        expect(mockGetPrice).toHaveBeenCalled();
        expect(mockCustomer).not.toBeInstanceOf(Customer);
        expect(mockProduct).not.toBeInstanceOf(Product);
    });

    it("should throw error for zero quantity", () => {
        expect(() => new Order("O1001", mockCustomer, mockProduct, 0)).toThrow("Quantity must be a positive integer.");
    });
    it("should throw error for null customer", () => {
        expect(() => new Order("O1001", null as any, mockProduct, 1)).toThrow("Invalid customer provided.");
    });
    
    it("should throw error for null product", () => {
        expect(() => new Order("O1001", mockCustomer, null as any, 1)).toThrow("Invalid product provided.");
    });
})