var readlineSync= require('readline-sync');

module.exports={

  input:function(itemList){
    var i=0;
    do{
      itemList[i]=readlineSync.question("What is item " + (i+1) + " ?\n");
      var question= readlineSync.question("Reply Y or y if you have more items and N or n if you don't \n");
      i++
    }
    while(question=="Y"||question=="y");
    return itemList;
  }
}