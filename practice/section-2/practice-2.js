function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    var count = 0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i] == collection[j])
        count++;
      var key=collection[i];
    }
    if (collection[i+1]!=key)
      result.push({"key": collection[i], "count": count});
  }
  return result;
}
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
  "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c", "c", "c", "c", "c", "c", "c", "c",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];
var result = count_same_elements(collection);
expect(result).toEqual([
  {key: "a", count: 3},
  {key: "e", count: 7},
  {key: "h", count: 11},
  {key: "t", count: 20},
  {key: "f", count: 9},
  {key: "c", count: 8},
  {key: "g", count: 7},
  {key: "b", count: 6},
  {key: "d", count: 5}
]);

