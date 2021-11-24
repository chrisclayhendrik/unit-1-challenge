const Payment = require('../src/payment');

describe('Payment class', () => {
    const testPayment = new Payment('Chris Hendrik', 1111111111111111,  '01/20', 123);

    test('has name', () => {
        expect(testPayment.name).toBe(testPayment.name);
    })

    test('has cc number', () => {
        expect(testPayment.ccNumber).toBe(testPayment.ccNumber);
    })

    test('has expiration date', () => {
        expect(testPayment.expirationDate).toBe(testPayment.expirationDate);
    })

    test('has cvv', () => {
        expect(testPayment.cvv).toBe(testPayment.cvv);
    })

    test('addPaymentInfo adds to array', () => {
        Payment.addPaymentInfo(testPayment);
        expect(testPayment.paymentInfo).toBe(testPayment.paymentInfo);
    })

    test('getPaymentInfo returns array', () => {
        expect(testPayment.getPaymentInfo()).toBe(Payment.paymentInfo);
    })

    test('clearPaymentInfo clears from array', () => {
        testPayment.clearPaymentInfo();
        expect(Payment.paymentInfo).toEqual([]);
    })

    test('submitPayment adds to array', () => {
        testPayment.submitPayment();
        expect(Payment.paymentInfo).toBe(Payment.paymentInfo);
    })
})