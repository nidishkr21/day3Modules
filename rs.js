var readlineSync= require('readline-sync');
import {input} from './input';
import {initialization} from './initialization';
import {fullConvertion} from './convertStringForEvaluation';
import {searchImported} from './taxPercentCalculate';
import {searchExempted} from './taxPercentCalculate';
import {compextract} from './extract';
import {individualTax} from './calculateTax';
import {priceAfterTax} from './calculateTax';
import {sumArray} from './calculateTax';
import {test} from './qCheck';
import {finalDisplay} from './finalDisplay';


  export function fullTaxCal(itemList){

    itemList=[];
    var totalTaxPercentage=[];
    var totalIndividualTax=[];
    var totalPrice=[];
    var quantity;
    var total;
    var sumTax;
    var display=[];
    var price=[];

    itemList=input(itemList);
    var item_e=itemList;
    quantity=test(itemList);

    price=initialization(price,itemList);
    totalTaxPercentage=initialization(totalTaxPercentage,itemList);
    totalIndividualTax=initialization(totalIndividualTax,itemList);
    totalPrice=initialization(totalPrice,itemList);
    item_e=fullConvertion(item_e);
    totalTaxPercentage=searchImported(item_e,totalTaxPercentage);
    totalTaxPercentage=searchExempted(item_e,totalTaxPercentage);
    price=compextract(item_e,price,quantity);
    totalIndividualTax=individualTax(price,totalTaxPercentage,totalIndividualTax);
    totalPrice=priceAfterTax(price,totalIndividualTax,totalPrice);
    total=sumArray(totalPrice,total);
    sumTax=sumArray(totalIndividualTax,sumTax);
    display=finalDisplay(itemList,totalPrice,total,sumTax,quantity);
  }
