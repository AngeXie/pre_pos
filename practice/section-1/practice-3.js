'use strict';

function collectSameElements(collectionA, objectB) {
  var array=new Array();
  var arrayValue=objectB['value'];
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<arrayValue.length;j++){
      if(collectionA[i] === arrayValue[j]){
        array[array.length]=collectionA[i];
      }
    }
  }
  return array;
}
