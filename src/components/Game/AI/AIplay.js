import MinMax from "./minmax";

export default function AIplay(boardoff,walloff,rotoff,iswhite){    
    const pieces={
        1:new Map(),
        0:new Map()
    };
    for(let i=0;i<10;i++){
        for(let j=0;j<15;j++){
            if(boardoff[i][j]>0){
                pieces[1].set(i*15+j, boardoff[i][j]);
            }
            if(boardoff[i][j]<0){
                pieces[0].set(i*15+j, boardoff[i][j]);
            }
        }
    }
    
    const board = boardoff.map(function (arr) {
        return arr.slice();
    });
    const walls= walloff.map(function (arr) {
        return arr.slice();
    });
    const state={ 
        board:board, 
        walls:walls, 
        pieces: pieces
    }
    console.log("iswhite",iswhite);
    const [bestval, bestmove] = MinMax(state, 1, iswhite, -100000, 100000);
    console.log("bestmove",bestmove);
    if(bestmove>=0){
        boardoff[~~((bestmove%150)/15)][(bestmove%150)%15]=boardoff[~~(~~(bestmove/150)/15)][~~(bestmove/150)%15];
        boardoff[~~(~~(bestmove/150)/15)][~~(bestmove/150)%15]=0;
    }
    
}