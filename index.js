document.addEventListener("DOMContentLoaded", function(){

  turn = 0;

  let playField = [
    [], [], [],
    [], [], [],
    [], [], []
  ];

  console.log('js ready');

  // const checkBox = document.getElementsByClassName("checkBox");
  // const checkBox = document.getElementById("wtf");
  //
  // checkBox.addEventListener('click', function show() {
  //   var boxData = data.getAttribute("data-box");
  //
  //   console.log(boxData);
  // })

  window.showDetails = function(data) {
    var boxData = data.getAttribute("data-box");
    console.log(boxData);
  }
});
