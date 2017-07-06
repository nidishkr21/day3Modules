var readlineSync= require('readline-sync');
var itemInput= require("./input.js");
var itemInitialization=require("./initialization.js");
var itemFullConvertion=require("./convertStringForEvaluation.js");
var totalPercentCalculate=require("./taxPercentCalculate.js");
var priceSplit=require("./extract.js");
var taxcal=require("./calculateTax.js")
var check=require("./qCheck.js")
var output=require("./finalDisplay.js");

module.exports={

  fullTaxCal:function(itemList){

    itemList=[];
    var totalTaxPercentage=[];
    var totalIndividualTax=[];
    var totalPrice=[];
    var quantity;
    var total;
    var sumTax;
    var display=[];
    var price=[];

    itemList=itemInput.input(itemList);
    item_e=itemList;
    quantity=check.test(itemList);

    price=itemInitialization.initialization(price,itemList);
    totalTaxPercentage=itemInitialization.initialization(totalTaxPercentage,itemList);
    totalIndividualTax=itemInitialization.initialization(totalIndividualTax,itemList);
    totalPrice=itemInitialization.initialization(totalPrice,itemList);
    item_e=itemFullConvertion.fullConvertion(item_e);
    totalTaxPercentage=totalPercentCalculate.searchImported(item_e,totalTaxPercentage);
    totalTaxPercentage=totalPercentCalculate.searchExempted(item_e,totalTaxPercentage);
    price=priceSplit.compextract(item_e,price,quantity);
    totalIndividualTax=taxcal.individualTax(price,totalTaxPercentage,totalIndividualTax);
    totalPrice=taxcal.priceAfterTax(price,totalIndividualTax,totalPrice);
    total=taxcal.sumArray(totalPrice,total);
    sumTax=taxcal.sumArray(totalIndividualTax,sumTax);
    display=output.finalDisplay(itemList,totalPrice,total,sumTax,quantity);
  }
}