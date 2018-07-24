$(document).ready(function(){
  console.log("test");
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });
});

$("#button").click(function(){
var displayValue = $("#ss-m").css("display")
console.log(displayValue)
if (displayValue=="none"){
$("#ss-m").css("display","block")
}
else if  (displayValue=="block"){
$("#ss-m").css("display","none")
}
});
