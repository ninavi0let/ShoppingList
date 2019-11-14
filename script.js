var prices = [];
var items = [];

function addToCart(price, item) {
  var itemAdd = document.getElement("btn-success");
  var shoppingList = document.getElementById("shoppingbox");
  groceryList.innerHTML += item + " $" + price + "<br>"
}

var shoppingArr = [];
var priceArr = [];
function addToArray(item, price) {
  shoppingArr.push(item);
  priceArr.push(price);
  console.log(shoppingArr);
  console.log(priceArr);
}
console.log(priceArr);

function sumArray(pricearr){
  var shoppingList = document.getElementById("shoppingboxtotal");
  var sum = priceArr.reduce(function(a,b)) {
    return a+b;})
    console.log(sum);
    shoppingList.innerHTML = "Total = $" + sum.toFixed(2)
}

//   prices.push(price);
//   items.push(item);
//
//   for (var i = 0; i < prices.length; i++) {
//     console.log(prices[i]+", " + items[i]);
// }
//   var item =  document.getElementById("item").inner;
//   item.textContent = getTotal() {

//   }
}
