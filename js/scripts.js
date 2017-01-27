// business logic
function Order (size, toppings) {
  this.sizeOrdered = size;
  this.toppingsOrdered = toppings;
}

Order.prototype.totalPrice = function(){
  var defaultPrice = 14.00;
  if (sizeOrdered === 'small') {
    return defaultPrice -2;
  } else if (sizeordered === 'Large') {
    return defaultPrice +3
  }
}
// user logic
