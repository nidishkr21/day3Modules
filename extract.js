import {cut} from './split';


  export function compextract(itemList,variableToStoreTheValue,lengthOfTheString)
  { var n=itemList.length;
    var a=[];
   
      a=cut(itemList,"at",lengthOfTheString);
    
    for(var i=0;i<n;i++)
    { var m=a[i].length;
      variableToStoreTheValue[i]=a[i][m-1];
      variableToStoreTheValue[i]=Number(variableToStoreTheValue[i])
    }
    return variableToStoreTheValue;
  }