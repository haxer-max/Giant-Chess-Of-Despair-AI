import greenlogic from "../Board/greenlogic";


export default function AIplay(boardoff,walloff,rotoff,iswhite){
    
    const piecesw=[];
    const piecesb=[];
    for(let i=0;i<10;i++){
        for(let j=0;j<15;j++){
            if(boardoff[i][j]>0){
                piecesw.push(i*15+j);
            }
            if(boardoff[i][j]<0){
                piecesb.push(i*15+j);
            }
        }
    }
    const pieces={
        1:piecesw,
        0:piecesb
    };
    const board = boardoff.map(function (arr) {
        return arr.slice();
    });
    const walls= walloff.map(function (arr) {
        return arr.slice();
    });
    const moveset=[];
    console.log("white",iswhite)
    for(let i=0; i<pieces[iswhite].length; i++){
        const valid=[]
        greenlogic( ~~(pieces[iswhite][i]/15), pieces[iswhite][i]%15, board,walls,valid);
        console.log("PIECE NAME",~~(pieces[iswhite][i]/15), pieces[iswhite][i]%15);
        for(let j=0;j<valid.length; j++){
            console.log(~~(valid[j]/15), valid[j]%15);
            moveset.push(pieces[iswhite][i]*150+valid[j]);
        }
    }
    moveset.sort((a,b)=>Math.random()-0.5);
    console.log("moveset")
    console.log(moveset)
    const best=moveset[0];
    if(best>=0){
        let ei=~~(~~(best/150)/15), ej=~~(best/150)%15,si=~~((best%150)/15),sj=(best%150)%15;
        console.log(ei,ej,si,sj);
        boardoff[~~((best%150)/15)][(best%150)%15]=boardoff[~~(~~(best/150)/15)][~~(best/150)%15];
        boardoff[~~(~~(best/150)/15)][~~(best/150)%15]=0;
    }
    

}