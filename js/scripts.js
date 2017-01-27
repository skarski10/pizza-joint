// business logic
var order;
var defaultPrice = 14;
function Order (size, toppings) {
  this.sizeOrdered = size;
  this.toppingsOrdered = toppings;
}

function veggies () {
  defaultPrice = defaultPrice + 0.5;
  return defaultPrice;
}
Order.prototype.totalPrice = function() {
  order.toppingsOrdered.forEach(veggies)
  if (order.sizeOrdered === 'small') {
    return defaultPrice -2;
  } else if (order.sizeOrdered === 'large') {
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
    order = new Order(pizzaSize, toppingsChecked);
  $('#pizza-cost').text(order.totalPrice);
  });
});
