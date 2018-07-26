$(document).ready(function(){
console.log('Initializing Done')
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
// $("#cls").click(function(){
// var displayValue = $("#ss-m2").css("display")
// console.log(displayValue)
// if (displayValue=="none"){
// $("#ss-m2").css("display","block")
// }
// else if  (displayValue=="block"){
// $("#ss-m2").css("display","none")
// }
// });
