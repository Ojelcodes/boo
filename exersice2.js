
     function celsToF(celsius)
  {
       var cTemp = celsius;   
     var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\u00B0 is ' + cToFahr +"\u00b0" ;
        console.log(message);
   } 
    function fToC(fahrenheit) 
    {
     var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
     var message = fTemp+ "\u00b0"+ fToCel + "\u00b0";
     console.log(message);
   } 
 fToC(70)
//  celsToF(50)







// function conrtTemp(tempC){
//     var xtemp = tempC;
//     var convert =  tempC/5
//     var output = tempC+ "\u00b0"+""+convert;
//     console.log(output)
//     }
//     conrtTemp(40)
    