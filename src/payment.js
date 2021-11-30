class Payment {
    
    static paymentInfo = [];

    constructor(name, ccNumber, expDate, cvv) {
        this.name = name;
        this.ccNumber = ccNumber;
        this.expDate = expDate;
        this.cvv = cvv;
    }

     static addPaymentInfo(name, ccNumber, expDate, cvv) {
        Payment.paymentInfo.push(new Payment(name, ccNumber, expDate, cvv));
    }

     getPaymentInfo() {
        return Payment.paymentInfo;
    }

     clearPaymentInfo() {
        Payment.paymentInfo = [];
    }

     submitPayment() {
        Payment.addPaymentInfo(this.name, this.ccNumber, this.expDate, this.cvv);
    }
}

module.exports = Payment;