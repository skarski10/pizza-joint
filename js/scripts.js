// business logic
var orderPrice;
function Order (size, toppings) {
  this.sizeOrdered = size;
  this.toppingsOrdered = toppings;
  // this.orderPrice;
  console.log(this.sizeOrdered);
  console.log(this.toppingsOrdered);
}


Order.prototype.totalPrice = function() {
  var defaultPrice = 14.00;
  function toppings(){
    defaultPrice = defaultPrice + 0.5;
    return defaultPrice;
  }
  toppingsOrdered.forEach(toppings);
  if (sizeOrdered === 'small') {
    return defaultPrice -2;
  } else if (sizeOrdered === 'large') {
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
  });
});
