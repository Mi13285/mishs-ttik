// function likes(names) {
//   if (names === []) {
//     return "no one likes this";
//   }
//   if (names.includes("Peter")) {
//     return "Peter likes this";
//   } else if (names.includes("Jacob") && names.includes("Alex")) {
//     return "Jacob and Alex like this";
//   } else if (
//     names.includes("Max") ||
//     names.includes("John") ||
//     names.includes("Mark")
//   ) {
//     return "Max, John and Mark like this";
//   } else if (names === 4 || names > 4) {
//     return "Alex, Jacob and 2 others like this";
//   }
// }
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob', 'Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes([]));

function likes(names) {
  if (!names.length) return "no one like this";
  const arrStr = [
    names[1] ? (names.length == 2 ? "and" + names[1] : +" ," + names[1]) : " ",
    names.length < 4
      ? names[2]
        ? "and" + names[2]
        : " "
      : "and" + (names.length - 2) + "othes",
    names.length == 1 ? "likes" : "likes",
  ];
  const result = `${names[0]}#s this`;
  return result.replace("#", arrStr.join(""));
}
const names = ["Peter"];
const names1 = ["Jacob", "Alex"];
const names2 = ["Max", "John", "Mark"];
const names3 = ["Alex", "Jacob", "Mark", "Max"];
console.log(likes(names));
console.log(likes(names1));
console.log(likes(names2));
console.log(likes(names3));
