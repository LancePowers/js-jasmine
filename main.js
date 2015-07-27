exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function(amount){
  var newAmount;
  if(amount<= 10){
        return amount * .1;
  } else if(amount<=20){
    newAmount = amount-10;
    return (newAmount*.07) + 1;
  } else if(amount<=30){
    newAmount = amount-20;
    return (newAmount*.05) + 1.7;
  } else if(amount>30){
    newAmount = amount-30;
    return (newAmount*.03) + 2.2;
  }
}
