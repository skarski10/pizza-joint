// business logic
var order;
var defaultPrice;
function Order (size, veggies, meats) {
  this.sizeOrdered = size;
  this.veggiesOrdered = veggies;
  this.meatsOrdered = meats;
}

function veggies () {
  defaultPrice = defaultPrice + 0.50;
  return defaultPrice;
}

function meats () {
  defaultPrice = defaultPrice + 1;
  return defaultPrice;
}
Order.prototype.totalPrice = function() {
  defaultPrice = 14;
  order.veggiesOrdered.forEach(veggies)
  order.meatsOrdered.forEach(meats)

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
    var veggiesChecked = [];
    var meatsChecked = [];
    $("input:checkbox[name=veggies]:checked").each(function(){
      veggiesChecked.push($(this).val());
    });
    $("input:checkbox[name=meats]:checked").each(function(){
      meatsChecked.push($(this).val());
    });
    var pizzaSize = $("input:radio[name=size]:checked").val();
    order;
    order = new Order(pizzaSize, veggiesChecked, meatsChecked);
    $('.orders').hide();
    $('.hide-me').show();
    $('#pizza-cost').text(order.totalPrice);
    $('#pizza-ordered').text('1 ' + order.sizeOrdered + ' pizza with ' + order.veggiesOrdered + ' & ' + order.meatsOrdered);

  });
});
