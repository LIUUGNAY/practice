function count_same_elements(collection) {
  var result = [],newarray=[];
  var j = 0;
  for (var i=0;i<9;i++)
    result[i]={};
  // var object=new Object();
  result[0].key = collection[0];
  result[0].count = 0;

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length==1)
    {
      if (collection[i] === result[j].key)
        result[j].count++;
      else {
        ++j;
        result[j].key = collection[i];
        result[j].count = 1;
        }
      }
      else
    {
      ++j;
      newarray=collection[i].split("");
      result[j].key=newarray[0];
      result[j].count=Number(newarray[2]);
    }
  }

  return result;
}
