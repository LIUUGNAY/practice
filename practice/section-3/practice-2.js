function create_updated_collection(collection_a, object_b) {
  var result=[];
  for (var i=0;i<collection_a.length;i++)
  {
    for (var j=0;j<object_b.value.length;j++)
    {
      if (collection_a[i].key==object_b.value[j])
      {
        collection_a[i].count=collection_a[i].count-Math.floor(collection_a[i].count/3);
      }
    }
    result.push({"key": collection_a[i].key,"count": collection_a[i].count});
  }
  return result;
}
var collection_a = [
  {key: "a", count: 2},
  {key: "e", count: 2},
  {key: "h", count: 2},
  {key: "t", count: 2},
  {key: "f", count: 2},
  {key: "c", count: 2},
  {key: "g", count: 2},
  {key: "b", count: 2},
  {key: "d", count: 2}
];

var object_b = {value: ["a", "d", "e", "f"]};
var result = create_updated_collection(collection_a, object_b);

expect(result).toEqual([
  {key: "a", count: 1},
  {key: "e", count: 1},
  {key: "h", count: 2},
  {key: "t", count: 2},
  {key: "f", count: 1},
  {key: "c", count: 2},
  {key: "g", count: 2},
  {key: "b", count: 2},
  {key: "d", count: 1}
]);
