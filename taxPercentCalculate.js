module.exports={
  searchImported:function(itemList,variableInWhichToStoreTheValue)
  { var n=itemList.length;
    for(var i=0;i<n;i++)
    { 
      var k=itemList[i].search("imported");
      if(k!=-1)
      {
        variableInWhichToStoreTheValue[i] +=5;
      }
    }
    return variableInWhichToStoreTheValue;
  },

  searchExempted:function(itemList,variableInWhichToStoreTheValue)
  {
    var n=itemList.length;
    var exemptGoods=["book","chocolate","pills","medicine","medical","food","pill"]; 
    var m=exemptGoods.length;
    for(var i=0;i<n;i++)
    {
      var e=0;
      for(var j=0;j<m;j++){
        var k=itemList[i].search(exemptGoods[j]);
        if(k!=-1)
          { 
            e++;
          }

        }
      if(e==0)
      {
        variableInWhichToStoreTheValue[i] +=10;
      }
    }
    return variableInWhichToStoreTheValue;
  }
}