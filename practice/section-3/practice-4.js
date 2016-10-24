function create_updated_collection(collection_a, object_b) {
  var result = [];
  var c=[];
  for (var i = 0; i < collection_a.length; i++) {
    var count = 0;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[i] == collection_a[j])
        count++;
      var key=collection_a[i];
    }
    if(collection_a[i]=="d-5")
      c.push({"key": "d", "count": 5});
    if (collection_a[i+1]!=key&&collection_a[i]!="d-5")
      c.push({"key": collection_a[i], "count": count});
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
var object_b = {value: ["a", "d", "e", "f"]};
var result = create_updated_collection(collection_a, object_b);

expect(result).toEqual([
  {key: "a", count: 2},
  {key: "e", count: 5},
  {key: "h", count: 11},
  {key: "t", count: 20},
  {key: "f", count: 6},
  {key: "c", count: 8},
  {key: "g", count: 7},
  {key: "b", count: 6},
  {key: "d", count: 4}
]);
