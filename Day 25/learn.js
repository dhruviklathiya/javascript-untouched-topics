// Symbol.toPrimitive – Customize Object-to-Primitive Conversion

// This hidden gem lets you define how an object behaves when it's converted to a primitive (like a string, number, or used in arithmetic).

const wallet = {
    amount: 999,
    [Symbol.toPrimitive](hint) {
    if (hint === 'string') return `💰 Rs.${this.amount}`;
    if (hint === 'number') return this.amount;
    return this.amount;
    }
};

console.log(String(wallet));   // "💰 Rs.999"
console.log(+wallet);          // 999
console.log(`${wallet}`);      // "💰 Rs.999"
console.log(wallet + 1);       // 1000
