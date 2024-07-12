var expect = function (val) {
  let object = {
    toBe: function (newVal) {
      if (newVal === val) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (newVal) {
      if (newVal !== val) return true;
      else throw new Error("Equal");
    },
  };
  return object;
};

console.log(expect(10).toBe(10));
