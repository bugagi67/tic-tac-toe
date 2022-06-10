let players = ['x', 'o'];
let activePlayer = 0;
let board;
var win = 0;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  players[activePlayer];
  renderBoard(board);
};



function click(row, col) {

  if (board[row][col] === '') {
    board[row][col] = players[activePlayer]    //добавление знака в игровое поле
  };

  renderBoard(board);   //отрисовка изменения на поле

  if (checkRow()=== true || checkCol() === true || checkDiagonal() === true) {       //проверка вариантов победы
    showWinner(activePlayer)     //вызов модального окна победителя в случае выиграшной комбинации
  } else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0   //смена знака в новом ходу
  };


  function checkRow () {         //проверка поды по строке
    win = 0;   
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === players[activePlayer]) {
        win++;

        if (win === board.length) {
          return true;
        }
      }
    }
  };

  function checkCol () {        //проверка победы по колонке
    win = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === players[activePlayer]) {
        win++;

        if (win === board.length) {
          return true;
        }
      }
    }
  };

  function checkDiagonal () {     //проверка победы по диагоналям
    win = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] === players[activePlayer] || board[i][board.length - 1 - i] === players[activePlayer] ) {
        win++;

        if (win === board.length) {
          return true;
        }
      }
    }
  };
};
