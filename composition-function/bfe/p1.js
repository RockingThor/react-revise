/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addition(num1, num2) {
  let carry = 0,
    result = "",
    i = num1.length - 1,
    j = num2.length - 1;
  while (i >= 0 && j >= 0) {
    let cur = Number(num1[i]) + Number(num2[j]) + carry;
    if (cur.toString().length > 1) {
      result = cur.toString()[cur.toString().length - 1] + result;
      carry = Number(cur.toString().substring(0, cur.toString().length - 1));
    } else {
      result = cur.toString() + result;
      carry = 0;
    }
    i--, j--;
  }
  while (i >= 0) {
    let cur = Number(num1[i--]) + carry;
    if (cur.toString().length > 1) {
      result = cur.toString()[cur.toString().length - 1] + result;
      carry = Number(cur.toString().substring(0, cur.toString().length - 1));
    } else {
      result = cur.toString() + result;
      carry = 0;
    }
  }
  while (j >= 0) {
    let cur = Number(num2[i--]) + carry;
    if (cur.toString().length > 1) {
      result = cur.toString()[cur.toString().length - 1] + result;
      carry = Number(cur.toString().substring(0, cur.toString().length - 1));
    } else {
      result = cur.toString() + result;
      carry = 0;
    }
  }
  if (carry !== 0) {
    result = carry.toString() + result;
  }
  return result;
}
function subtraction(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    result = "",
    carry = 0;
  while (i >= 0 && j >= 0) {
    if (Number(num1[i]) >= Number(num2[j])) {
      result =
        (Number(num1[i]) - (Number(num2[j]) + carry)).toString() + result;
      carry = 0;
    } else {
      result =
        (Number(num1[i]) + 10 - (Number(num2[j]) + carry)).toString() + result;
      carry = 1;
    }
    i--, j--;
  }

  while (i >= 0) {
    if (carry !== 0) {
      if (Number(num1[i]) >= carry) {
        result = (Number(num1[i]) - carry).toString() + result;
        carry = 0;
      } else {
        result = (Number(num1[i]) + 10 - carry).toString() + result;
        carry = 1;
      }
    } else {
      result = num1[i] + result;
      carry = 0;
    }
    console.log(result);
    i--;
  }
  let index = 0;
  while (result[index] === "0") {
    index++;
  }
  return result.substring(index, result.length);
}
function determineBiggerNum(num1, num2) {
  if (num1.length > num2.length) {
    return 1;
  } else if (num2.length > num1.length) {
    return 2;
  } else {
    let i = 0;
    while (i < num1.length) {
      if (Number(num1[i]) > Number(num2[i])) {
        return 1;
      } else if (Number(num1[i]) < Number(num2[i])) {
        return 2;
      }
      i++;
    }
    return 0;
  }
}
function add(num1, num2) {
  if (num1[0] !== "+" && num1[0] !== "-") num1 = "+" + num1;
  if (num2[0] !== "+" && num2[0] !== "-") num2 = "+" + num2;
  if (num1[0] === num2[0]) {
    return (
      num1[0] +
      addition(num1.substring(1, num1.length), num2.substring(1, num2.length))
    );
  } else {
    let result = determineBiggerNum(
      num1.substring(1, num1.length),
      num2.substring(1, num2.length)
    );
    console.log(result);
    if (result === 0) return "0";
    if (result === 1) {
      return (
        (num1[0] === "-" ? num1[0] : "") +
        subtraction(
          num1.substring(1, num1.length),
          num2.substring(1, num2.length)
        )
      );
    }
    if (result === 2) {
      return (
        (num2[0] === "-" ? num2[0] : "") +
        subtraction(
          num2.substring(1, num2.length),
          num1.substring(1, num1.length)
        )
      );
    }
  }
}

console.log(subtraction("999999999999999999", "1"));
