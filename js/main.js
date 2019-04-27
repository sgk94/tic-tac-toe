/*----- constants -----*/ 
const COLORS = {
    '1': 'red',
    '-1': 'blue',
    '0': 'white'
};




/*----- app's state (variables) -----*/ 
var board, winner, turn;





/*----- cached element references -----*/ 






/*----- event listeners -----*/ 
document.getElementById('clickBox').addEventListener('click', handleClick);





/*----- functions -----*/
init();

function handleClick() {

render();





//     const marker = evt.target;
//     const colIdx = parseInt(marker.id.replace('col', ''));
//     if (isNaN(colIdx)) return;
//     const rowIdx = board[colIdx].indexOf(0);
//     if (rowIdx === -1) return;
//     board[colIdx][rowIdx] = turn;
//     winner = getWinner();
//     turn *= -1;
//     render();
} 

function render() {
   board.forEach(function(colArr, colIdx) {
    // colArr.forEach(function(cell, rowIdx ){
    // const div = document.getElementById(`c${colIdx}r${rowIdx}`);
//   div.style.backgroundcolor = COLORS [cell];

    // });
   });
}


function init() {
    board = [
        [0, 0, 0] // column 1
        [0, 0, 0] // column 2
        [0, 0, 0] // column 3
    ];
    winner = null;
    turn = 1;
    render();
}; 

    