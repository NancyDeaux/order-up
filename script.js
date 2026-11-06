// Grab tag list container
const tagList = document.querySelector("#tag-list");
// an array with tags
const tags = ["sweet", "organic", "unique"];
// an array with prices
const prices = [8.5, 5.5, 6, 7.5];
console.log("Tags array:", tags);
console.log("Prices array:", prices);

let total = 0;
for (let i = 0; i < prices.length; i++) {
 total = total + prices[i];
}

tags.forEach(function (tag) {
    const li = document.createElement("li");
    li.textContent = tag;
    tagList.appendChild(li);
});

const withTax = prices.map(function (price) {
    return (price * 1.08).toFixed(2);
    });
    console.log(prices, withTax);
    
    const taxList = document.querySelector("#tax-list");
    withTax.forEach (function (price) {
    const li = document.createElement("li");
    li.textContent = "$" + price;
    taxList.appendChild(li);
    });
