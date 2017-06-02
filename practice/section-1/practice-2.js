'use strict';

function collectSameElements(collectionA, collectionB) {
  var array=new Array();
  var col=collectionB.length;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<col;j++){
      for(var m=0;m<collectionB[j].length;m++){
        if(collectionA[i] === collectionB[j][m]){
          array[array.length]=collectionA[i];
        }
      }
    }
}
  return array;
}
