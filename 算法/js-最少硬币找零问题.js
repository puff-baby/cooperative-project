function MinCoinChange(coins) {
    this.coins = coins;
    this.cache = {};
    this.makeChange = (num) => {
        if (num === 0) return [];
        if (Reflect.has(this.cache, num)) return this.cache[num];
        var newAmount, min = [], newMin;
        this.coins.forEach(coin => {
            newAmount = num - coin;
            if (newAmount >= 0) newMin = this.makeChange(newAmount);
            if (newAmount >= 0
                && (newMin.length < min.length - 1 || !min.length))
                min = [coin, ...newMin];
        })
        return this.cache[num] = min;
    };
}
var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log('min coins ', minCoinChange.makeChange(36));