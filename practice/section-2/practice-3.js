function count_same_elements(collection) {
  var result = [],newarray=[];
  var j = 0;
  for (var i=0;i<9;i++)
    result[i]={};
  // var object=new Object();
  result[0].name = collection[0];
  result[0].summary = 0;

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length == 1) {
      if (collection[i] === result[j].name)
        result[j].summary++;

      else {
        ++j;
        result[j].name = collection[i];
        result[j].summary = 1;
      }
    }

    else {
      newarray = collection[i].split("");
      if (newarray[0] === result[j].name)
          if (newarray.length !=5 )
            result[j].summary += Number(newarray[2]);
          else
            result[j].summary += (Number(newarray[2]) * 10 + Number(newarray[3]));
      else {
        j++;
        result[j].name = newarray[0];
        result[j].summary = Number(newarray[2]);
      }
    }
  }
  return result;
}

