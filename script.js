 function cleanCode(product,increase){
   var plusInput_value=document.getElementById(product+"-value");
   var plus_value=parseInt(plusInput_value.value);
   var total_value= plus_value;
    if(increase == true){
      total_value= plus_value +1;
    }if(increase == false &&  total_value > 0){
      total_value= plus_value - 1;
    }
   plusInput_value.value=total_value;

   var first_price= total_value;
       if(product == 'first'){
         first_price= total_value * 150;
       }if(product == 'second'){
         first_price= total_value * 100;
       }

   document.getElementById(product+"-price").innerHTML="First Class"+("$"+first_price)
   totalPrice();
}
function  totalPrice(){

           var first_price=getInputValue('first');
           var second_price=getInputValue('second') ;

   var totalPrice=first_price * 150 + second_price * 100;
   document.getElementById("totalPrice").innerText=totalPrice;

   var tenPercent=Math.round(totalPrice * 0.1);
   document.getElementById("Charge").innerText="$"+tenPercent;

   const grantTotal= totalPrice + tenPercent;
   document.getElementById("total").innerText=grantTotal;
   
}
function getInputValue(product){
   var plusInput_value=document.getElementById(product+"-value");
   var plus_value=parseInt(plusInput_value.value);
   return plus_value;
}