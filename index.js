// console.log();
// console.log("This is console.log()");
// console.assert(3 + 4 === 6, "Test failed 3 + 4 != 6");
//틀릴시 이유 "Test failed 3 + 4 != 6"가 출력되고 맞을시 아무것도 출력안됨
// console.table(
//   [
//     {
//       a: 1,
//       b: 2,
//     },
//     {
//       a: 3,
//       b: 4,
//     },
//   ],
//   ["a", "b"]
// );
// function funcA() {
//     console.log('aaa');
// }
// funcA();

// (function funcB() {
//     console.log('bbb');
// })();

// var funcC = function

// var h1 = document.querySelector("h1");
// console.log("h1", h1, h1.textContent);

// h1.addEventListener("click", function (e) {
//   if (e.target.innetText === "You clicked me") {
//     window.location = "https://google.com";
//   }
//   e.target.innerText = "You clicked me";
// });

// console.log(`${window.outerWidth},   ${window.outerHeight} `);

// document.addEventListener("keydown", function (e) {
//   console.log("keydown", e);
// });

// var evt = new MouseEvent("click");
// h1.dispatchEvent(evt);

// var map = [
//   [1, 0, 0, 0],
//   [1, 1, 0, 1],
//   [0, 0, 0, 1],
//   [2, 1, 1, 1],
// ];

// var startY = 0;
// var startX = 1;

// // 좌측 위 0부터 시작
// // 2인 곳까지 가야함
// // hmm.. 오모시로이..

// for (var f = 0; f < 5; f++) {
//   console.log(`f = ${f}`);
// }

$(document).ready(function () {
  console.log("111");
  var testP = $("<p></p>").appendTo("body");
  $("<p>Inner Test11</p>").appendTo(testP);
});
