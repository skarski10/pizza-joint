// business logic
var orderPrice;
function Order (size, toppings) {
  this.sizeOrdered = size;
  this.toppingsOrdered = toppings;
  console.log(this.sizeOrdered);
  console.log(this.toppingsOrdered);
}
var defaultPrice = 14;

function toppings() {
  defaultPrice = defaultPrice + 0.5;
  return defaultPrice;
}
console.log(defaultPrice);
Order.prototype.totalPrice = function() {
  console.log(this.sizeOrdered);
  console.log(toppingsOrdered);
  toppingsOrdered.forEach(toppings);
  if (size === 'small') {
    return defaultPrice -2;
  } else if (size === 'large') {
    return defaultPrice +3
  }
  return defaultPrice;
}

// user logic
$(document).ready(function() {
  $('form#toppings').submit(function(event) {
    event.preventDefault();
    var toppingsChecked = [];
    $("input:checkbox[name=veggies]:checked").each(function(){
      toppingsChecked.push($(this).val());
    });
    var pizzaSize = $("input:radio[name=size]:checked").val();
  var order = new Order(pizzaSize, toppingsChecked);

  // $('#pizza-cost').text(order.totalPrice);
  });
});
