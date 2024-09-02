export function generateList(size) {
  let list = [];
  for (let i = 1; i <= size; i++) {
    list.push({ data: `This is list item ${i}` });
  }
  return list;
}
