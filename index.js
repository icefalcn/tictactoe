document.addEventListener("DOMContentLoaded", function(){

  let turn = 'O';

  let XMoves = [];
  let OMoves = [];

  let playField = [
    [], [], [],
    [], [], [],
    [], [], []
  ];

  let winConditions = ['0', '1', '2'];

  console.log('js ready');

  window.showDetails = function(data) {
    var boxData = data.getAttribute("data-box");

    console.log(playField[boxData].length);
    if(playField[boxData].length === 0) {

      playField[boxData].push(boxData);

      console.log(playField[boxData]);
      console.log('inputing');
      if(turn == 'X') {
        XMoves.push(boxData);
        turn = '0';
      } else {
        OMoves.push(boxData);
        turn = 'X';
      }
      document.getElementById(`${boxData}`).innerHTML = `${turn}`;
      document.getElementById('title').innerHTML = `${turn}'s Turn`;
    }
    checkWin()
    console.log('X', XMoves);
    console.log('O', OMoves);
    // console.log(playField);
  }

  function containsAll(winCond, haystack){
    // for(var i = 0 , len = winCond.length; i < len; i++){
      let winner = true;
       winCond.map((winCondNum) => {
         if(haystack.includes(winCondNum)) {

         } else {
           winner = false;
         }
       })
    // }
    console.log(winner);
    return winner;
  }

  // containsAll([34, 78, 89], [78, 67, 34, 99, 56, 89]); // true
  // containsAll([34, 78, 89], [78, 67, 99, 56, 89]); // false
  // containsAll([34, 78, 89], [78, 89]); // false
  // false


  function checkWin() {
    if(turn == 'X') {
      containsAll(winConditions, XMoves);
    } else {
      containsAll(winConditions, OMoves);
    }
  }
});
