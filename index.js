document.addEventListener("DOMContentLoaded", function(){

  let turn = 'O';

  let XMoves = [];
  let OMoves = [];

  let playField = [
    [], [], [],
    [], [], [],
    [], [], []
  ];

  let winConditions = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
  ];

  window.showDetails = function(data) {
    var boxData = data.getAttribute("data-box");
    if(playField[boxData].length === 0) {

      playField[boxData].push(boxData);

      document.getElementById(`${boxData}`).innerHTML = `${turn}`;
      if(turn == 'X') {
        XMoves.push(boxData);
        checkWin()

        turn = 'O';
      } else {
        OMoves.push(boxData);
        checkWin()

        turn = 'X';
      }
      document.getElementById('title').innerHTML = `${turn}'s Turn`;
    }
    console.log('X', XMoves);
    console.log('O', OMoves);
    // console.log(playField);
  }

  function containsAll(winCond, playerMoves){
    return winCond.map((winningConditions) => { //Loops through all winning conditions
      let winner = true;

      winningConditions.map((winCondNum) => { //loops through all winning condition numbers
        if(playerMoves.includes(winCondNum)) {

        } else {
          winner = false;
        }
      })

      if(winner) {
        return console.log(`${turn} has won the game`);
      } else {
        return console.log(`${turn} has gone, no win`);

      }
    })
    // for(var i = 0 ; i < winCond.length; i++){
    // }

    // if(winner) {
    //   return console.log(`${turn} has won the game`);
    // } else {
    //   return console.log(`${turn} has gone, no win`);
    // }
  }

  function checkWin() {
    if(turn == 'X') {
      return containsAll(winConditions, XMoves);
    } else {
      return containsAll(winConditions, OMoves);
    }
  }
});
