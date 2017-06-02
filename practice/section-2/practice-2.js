'use strict';

function countSameElements(collection) {
  var array=new Array();
  for(var i=0,j;i<collection.length;i++){
    if(collection[i].match('[a-z]-[0-9]')){
      var j={};
      j['key']=collection[i].substring(0,collection[i].indexOf('-'));
      j['count']=parseInt(collection[i].substring(collection[i].indexOf('-')+1,collection[i].length));
      array[array.length]=j;
      continue;
    }
    for(j=0;j<array.length;j++){
      if(collection[i] === array[j]['key']){
        array[j]['count']++;break;
      }
    }
    if(j === array.length){
      var j={};
      j['key']=collection[i];
      j['count']=1;
      array[array.length]=j;
    }
  }
  return array;
}
