/*----- constants -----*/ 
const COLORS = {
    '1': 'red',
    '-1': 'blue',
    '0': 'white'
};

/*----- app's state (variables) -----*/ 
var board, winner, turn;

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.getElementById('clickBox').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', init);


/*----- functions -----*/

init();

// Check column function, run to see if column has 3 in a row
    //rename function to checkCol
function checkCol() 
{
    board.forEach(function(colArr, colIdx) 
    { 
    var colSum = 0;
        colArr.forEach(function(cell, rowIdx ) 
        { 
          colSum += cell;
          if (colSum === 3 || colSum === -3) {
              alert (`Congratulations, you've won!`);
              
          }
        //   console.log(colSum);
        
                
                // console.log('colId: ' + colIdx + '; rowIdx: ' + rowIdx + '; cell: '+ cell);
  
        });
    });
}

function diagonalCheck()
{ 
    diagonalSum1=0;
    diagonalSum2=0;
    // This iterates the first large array (columns)
    board.forEach(function(colArr, colIdx) 
    {
        
        console.log('-------------');
        colArr.forEach(function(cell, rowIdx ) 
        {
            if(colIdx == rowIdx )
            {
                console.log('colIdx: ' +colIdx + '; rowIdx: ' +rowIdx + '; cell: ' + cell);
                diagonalSum1=diagonalSum1 +cell;
            }
            
            if((colIdx==0 && rowIdx==2)|| (colIdx==2 && rowIdx==0) || (colIdx==1 && rowIdx==1))
            {
                console.log('colIdx: ' +colIdx + '; rowIdx: ' +rowIdx + '; cell: ' + cell);
                diagonalSum2=diagonalSum2 +cell;
            }
        });
        console.log('diagonalSum1: '+diagonalSum1);
        console.log('diagonalSum2: '+diagonalSum2);
        if(diagonalSum1==3 ||diagonalSum1==-3 || diagonalSum2==3||diagonalSum2==-3)
        {
            alert (`Congratulations, you've won!`);
            
        }
    });
}   

function rowCheck ()
{
    rowArr1 = [];
    rowArr2 = [];
    rowArr3 = [];
    board.forEach(function(colArr, colIdx) 
    {
        rowSum1 = 0;
        rowSum2 = 0;
        rowSum3 = 0;
        // console.log('colArr: '+ colArr);
        // console.log('-------------');
       // colSum = 0;
        colArr.forEach(function(cell, rowIdx ) 
        {
            // console.log('col: ' + colIdx + '; row: ' +  rowIdx +'; color: '+ COLORS[cell]+'; cell: '+ cell);
            if(rowIdx == 0)
            {
                rowArr1.push(cell);
            } 
            else if (rowIdx ==1)
            {
                rowArr2.push(cell);
            }
            else if (rowIdx == 2)
            {
                rowArr3.push(cell);
            }
        });
        // console.log('rowArr1: '+ rowArr1);
        // console.log('rowArr2: '+ rowArr2);
        // console.log('rowArr3: '+ rowArr3);
        // console.log('rowArr1.length: ' + rowArr1.length);
        for( var i = 0; i<rowArr1.length; i++)
        {
            // console.log('rowArr2[i]: '+rowArr2[i]);
            rowSum1 = rowSum1+ rowArr1[i];
            // console.log('rowSum2 in loop BEFORE: ' + rowSum2);
            rowSum2 = rowSum2+ rowArr2[i];
            // console.log('rowSum2 in loop AFTER: ' + rowSum2);
            rowSum3 = rowSum3+ rowArr3[i];
        }
        // console.log('rowSum2: '+ rowSum2);
        //console.log('colSum: '+ colSum);
        if(rowSum1 === 3 || rowSum1 === -3 || rowSum2 === 3 || rowSum2 === -3 || rowSum3 === 3 || rowSum3 === -3)
        {
            alert (`Congratulations, you've won!`);
            
        }
    });
}

// Action of clicking square
function handleClick(evt) 
{
    //giving click the value of the element that was clicked on
    const click = evt.target;
        // console.log('click.id: '+click.id);
    const colIdx = parseInt(click.id.replace('c', ''));
        // console.log('colIdx: '+colIdx);
    const rowIdx = click.id.replace(`c${colIdx}r`, '');
         // console.log('rowIdx: '+rowIdx);
    if (board[colIdx][rowIdx] !== 0) return;
    board[colIdx][rowIdx] = turn;
    
         // console.log(turn);
           // console.log(click);
    render();
        // console.log('***********CLICK***********');
    checkCol();

    rowCheck();
    diagonalCheck();
}
    
function render() 
{
// This iterates the first large array (columns), by the col index.
   board.forEach(function(colArr, colIdx) 
   {
    // This iterates through the next three nested arrays (rows)
        colArr.forEach(function(cell, rowIdx ) 
        { 

            // div equals the current position when iterating through the column and then the row
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = (COLORS[cell]);

          

            // const winOne = cell[0] 
            // console.log(winOne);
            
            // console.log(`winOne: ` + winOne);
            // console.log('col: ' + colIdx + '; row: ' +  rowIdx +'; color: '+ COLORS[cell]+'; cell: '+ cell);

              turn *= -1;
        });
    });

    //Display message for player turn or tie
    if (winner === 'Tie') 
    {
        // console.log(winner);
        // console.log(COLORS[turn]);
        alert(`It's a tie!`); 
    } 
    else 
    {
        msgEl.textContent = `${COLORS[turn]} player's turn!`;
    }
}

// starting the game 
function init() 
{
    board = 
        [
            [0, 0, 0], // column 1
            [0, 0, 0], // column 2
            [0, 0, 0], // column 3
        ];
    winner = null;
    turn = -1;
    render();
}