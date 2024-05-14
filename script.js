function callBackExample() {
  one.removeEventListener('hover', callBackExample);
}

document.querySelector("#one").addEventListener('hover', function () {
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");
  two.remove();
  console.log(two); // will print null after deletion
  one.removeEventListener('hover', callBackExample);
});

document.querySelector("#two").addEventListener('hover', function () {
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");
  one.remove();
  console.log(one); // will print null after deletion
  two.removeEventListener('hover', callBackExample);
});