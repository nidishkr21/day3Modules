module.exports={
  cut:function(itemList,stringToSplit,w)
  { var n=itemList.length;
      if(w==1)
    { itemList=`${itemList}`;
      variableInWhichToStoreTheValue=itemList.split(stringToSplit);
      return variableInWhichToStoreTheValue;
    }
    else{
      var variableInWhichToStoreTheValue=[];
      for(var i=0;i<n;i++)
      { 
        variableInWhichToStoreTheValue[i]=itemList[i].split(stringToSplit);

      }
      return variableInWhichToStoreTheValue;
    } 
  }
}