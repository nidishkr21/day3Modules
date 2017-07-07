import {cut} from './split';


  export function finalDisplay(itemList,priceArray,totalValue,totalTax,itemQuantity)
  {
    var a=[];
    a=cut(itemList," ",itemQuantity);
    
    if(itemQuantity!=1){
      for(var i=0;i<itemQuantity;i++)
      {
        var m=a[i].length;
      for(var j=m-2;j<m;j++)
      {
        a[i][j]="";
      }
       a[i]=a[i].join(" ");
     }
       for(var i=0;i<itemQuantity;i++)
    {
      console.log(a[i] + ":" + priceArray[i]);
    }
    console.log("Sales Tax  :" + totalTax);
    console.log("Total  :" + totalValue);
    }

    else
    {
      a=a.join(" ");
      console.log(a+ ":"+ priceArray)
      console.log("Sales Tax  :" + totalTax);
      console.log("Total  :" + totalValue);
    }
  }
