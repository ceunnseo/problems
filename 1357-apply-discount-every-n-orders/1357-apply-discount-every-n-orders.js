/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.n = n
    this.count = 0;
    this.discount= discount * 0.01
    this.dict = {}
    for (let i = 0; i < products.length; i++) {
        this.dict[products[i]] = prices[i]
    }
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    this.count++
    let res = 0;
    for (let i = 0; i < amount.length; i++) {
        res += this.dict[product[i]] * amount[i]
    }
    if (this.count % this.n === 0) {
        res = res - (res * this.discount)
    }
    return res;
};

/** 
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */