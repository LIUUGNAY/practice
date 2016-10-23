function collect_same_elements(collection_a, object_b) {
  var result=[];
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(collection_a[i]==object_b.value[j])
      {
        result.push(object_b.value[j])
      }
    }
  }
  return result;
}
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = {value: ["a", "d", "e", "f"]};
var result = collect_same_elements(collection_a, collection_b);
expect(result).toEqual(["a", "e", "f", "d"]);
//
// describe('practice-1-3', function() {
//
//   var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
//   var collection_b = {value: ["a", "d", "e", "f"]};
//
//   it("选出A集合中跟B对象中value属性中的元素相同的元素", function() {
//     var result = collect_same_elements(collection_a, collection_b);
//
//     expect(result).toEqual(["a", "e", "f", "d"]);
//   });
// });
