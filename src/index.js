module.exports = function reverse(n) {
    n < 0 ? (n = n * -1) : (n = n);
    let str = n.toString();
    let result = Array.from(str).reverse().join("");
    return +result;
};
