// business logic
var orderPrice;
function Order (size, toppings) {
  this.sizeOrdered = size;
  this.toppingsOrdered = toppings;
  // this.orderPrice;
}

Order.prototype.totalPrice = function() {
  var defaultPrice = 14.00;
  function toppings(){
    defaultPrice = defaultPrice + 0.5;
    return defaultPrice;
  }
  toppingsOrdered.forEach(toppings);
  // orderPrice = defaultPrice;

  if (sizeOrdered === 'small') {
    return defaultPrice -2;
  } else if (sizeOrdered === 'large') {
    return defaultPrice +3
  }
  return defaultPrice;
}
// user logic
