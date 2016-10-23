function collect_same_elements(collection_a, collection_b) {
  var result=[];
  for (var i=0;i<collection_a.length;i++)
  {
    for (var j=0;j<collection_b.value.length;j++)
    {
      if (collection_a[i].key==collection_b.value[j])
        result.push(collection_b.value[j])
    }
  }
  return result;
}
  var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
  var collection_b = {value: ["a", "d", "e", "f"]};
 var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
