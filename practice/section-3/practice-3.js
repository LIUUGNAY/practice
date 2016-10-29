function create_updated_collection(collection_a, object_b) {
  var c = [];
  var j = 0;
  var result=[];
  for (var i=0;i<9;i++)
    c[i]={};
  // var object=new Object();
  c[0].key = collection_a[0];
 c[0].count = 0;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] === c[j].key)
      c[j].count++;
    else {
      ++j;
      c[j].key = collection_a[i];
      c[j].count = 1;
    }
  }
  for (var i=0;i<c.length;i++)
  {
    for (var j=0;j<object_b.value.length;j++)
    {
      if (c[i].key==object_b.value[j])
      {
        c[i].count=c[i].count-Math.floor(c[i].count/3);
      }
    }
    result.push({"key": c[i].key,"count": c[i].count});
  }
  return result;
}
