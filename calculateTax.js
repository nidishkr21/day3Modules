
  export function individualTax(priceOfProduct,totalTaxPercentage,variableInWhichToStoreTheValue)
  { var n=priceOfProduct.length;
    for(var i=0;i<n;i++)
    { 
      variableInWhichToStoreTheValue[i]=priceOfProduct[i]*totalTaxPercentage[i]/100;
      variableInWhichToStoreTheValue[i]=Math.round(variableInWhichToStoreTheValue[i]*20)/20;
    }
    return variableInWhichToStoreTheValue;
  }

  export function priceAfterTax(priceOfProduct,individualTax,variableInWhichToStoreTheValue)
  {
    var n=priceOfProduct.length;
    for(var i=0;i<n;i++)
    {
      variableInWhichToStoreTheValue[i]=priceOfProduct[i]+individualTax[i];
    }
    return variableInWhichToStoreTheValue;
  }

  export function sumArray(arrayForSum,variableInWhichToStoreTheValue)
  {
    variableInWhichToStoreTheValue=arrayForSum.reduce(function(previousVal,currentVal){
      return previousVal+currentVal
    });
    return variableInWhichToStoreTheValue;
  }
