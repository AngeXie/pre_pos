'use strict';

function collectSameElements(collectionA, objectB) {
  var array=new Array();
  var arrayKey=new Array();
  for(var i=0;i<collectionA.length;i++){
    if(collectionA[i]['key'] != undefined){
      arrayKey[arrayKey.length]=collectionA[i]['key'];
    }
  }
  var arrayValue=objectB['value'];
  for(var i=0;i<arrayKey.length;i++){
    for(var j=0;j<arrayValue.length;j++){
      if(arrayKey[i] === arrayValue[j]){
        array[array.length]=arrayKey[i];
      }
    }
  }
  return array;
}
