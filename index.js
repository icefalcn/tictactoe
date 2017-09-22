document.addEventListener("DOMContentLoaded", function(){

  let turn = 'O';

  let XMoves = [];
  let OMoves = [];

  let gameEnded = false;

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
    if(playField[boxData].length === 0 && gameEnded == false) {

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
      if(!gameEnded) {
        document.getElementById('title').innerHTML = `${turn}'s Turn`;
      }
    }
    console.log('X', XMoves);
    console.log('O', OMoves);
  }

  function containsAll(winCond, playerMoves){
    for(var i = 0 ; i < winCond.length; i++){
      let winner = true;
      winCond[i].map((winCondNum) => {
        if(playerMoves.includes(winCondNum)) {

        } else {
          winner = false;
        }
      })

      if(winner) {
        gameEnded = true;
        document.getElementById('title').innerHTML = `${turn}'s has Won the game`;
        return console.log(`${turn} has won the game`);
        break;
      }
    }
  }

  function checkWin() {
    if(turn == 'X') {
      return containsAll(winConditions, XMoves);
    } else {
      return containsAll(winConditions, OMoves);
    }
  }

  window.reset = function() {
    console.log('reset');
    gameEnded = false;
    XMoves = [];
    OMoves = [];

    playField = [
      [], [], [],
      [], [], [],
      [], [], []
    ];

    for(let i =0; i < 9; i++) {
      document.getElementById(`${i}`).innerHTML = '';
    }

    document.getElementById('title').innerHTML = 'TicTacToe!';

  }
});
