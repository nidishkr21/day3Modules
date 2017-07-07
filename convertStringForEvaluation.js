
  export function fullConvertion(itemList){
    var n=itemList.length;
    var variableToStoreTheValue=[];
    for(var i=0;i<n;i++)
    { 
      variableToStoreTheValue[i]=itemList[i].toLowerCase();
      variableToStoreTheValue[i]=variableToStoreTheValue[i].replace(/[^a-z|0-9|.]/g,"")
    }
    return variableToStoreTheValue;
  }
