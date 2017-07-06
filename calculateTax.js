module.exports={
  individualTax:function(priceOfProduct,totalTaxPercentage,variableInWhichToStoreTheValue)
  { var n=priceOfProduct.length;
    for(var i=0;i<n;i++)
    { 
      variableInWhichToStoreTheValue[i]=priceOfProduct[i]*totalTaxPercentage[i]/100;
      variableInWhichToStoreTheValue[i]=Math.round(variableInWhichToStoreTheValue[i]*20)/20;
    }
    return variableInWhichToStoreTheValue;
  },

  priceAfterTax:function(priceOfProduct,individualTax,variableInWhichToStoreTheValue)
  {
    var n=priceOfProduct.length;
    for(var i=0;i<n;i++)
    {
      variableInWhichToStoreTheValue[i]=priceOfProduct[i]+individualTax[i];
    }
    return variableInWhichToStoreTheValue;
  },

  sumArray:function(arrayForSum,variableInWhichToStoreTheValue)
  {
    variableInWhichToStoreTheValue=arrayForSum.reduce(function(previousVal,currentVal){
      return previousVal+currentVal
    });
    return variableInWhichToStoreTheValue;
  }
}