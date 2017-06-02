'use strict';
function getJ1(string){
  var j={};
  j['name']=string.substring(0,string.indexOf(':'));
  j['summary']=parseInt(string.substring(string.indexOf(':')+1,string.length));
  return j;
}
function getJ2(string){
  var j={};
  j['name']=string.substring(0,string.indexOf('['));
  j['summary']=parseInt(string.substring(string.indexOf('[')+1,string.indexOf(']')));
  return j;
}
function checkSame(array,string){
  for(var i=0;i<array.length;i++){
    if(array[i]['name'] === string){
      return i;
    }
  }
  return -1;
}
function countSameElements(collection) {
  var array=new Array();
  for(var i=0,j;i<collection.length;i++){
    if(collection[i].match('[a-z]-[0-9]')){
      var j={};
      j['name']=collection[i].substring(0,collection[i].indexOf('-'));
      j['summary']=parseInt(collection[i].substring(collection[i].indexOf('-')+1,collection[i].length));
      if(checkSame(array,j['name'])>=0){
        array[checkSame(array,j['name'])]['summary']+=j['summary'];
        continue;
      }
      array[array.length]=j;
      continue;
    }
    if(collection[i].match('[a-z]:[0-9]')){
      var json=getJ1(collection[i]);
      var index=checkSame(array,json['name']);
      if(index >= 0){
        array[index]['summary']+=json['summary'];continue;
      }
      array[array.length]=json;continue;
    }
    if(collection[i].match('[[a-z](\[)([0-9]+)(])')){
      var json=getJ2(collection[i]);
      var index=checkSame(array,json['name']);
      if(index >= 0){
        array[index]['summary']+=json['summary'];continue;
      }
      array[array.length]=json;continue;
    }
    for(j=0;j<array.length;j++){
      if(collection[i] === array[j]['name']){
        array[j]['summary']++;break;
      }
    }
    if(j === array.length){
      var j={};
      j['name']=collection[i];
      j['summary']=1;
      array[array.length]=j;
    }
  }
  return array;
}
