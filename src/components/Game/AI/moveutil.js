import greenlogic from "../Board/greenlogic";

const getPossibleMoves=(moveset, state, iswhite)=>{
    for(let [key,value] of state.pieces[iswhite].entries()){
        const valid=[];
        greenlogic( ~~(key/15), key%15, state.board,state.walls,valid);
        for(let j=0;j<valid.length; j++){
            moveset.push(key*150+valid[j]);
        }
    }
    moveset.sort((a,b)=>Math.random()-0.5);
}

const play=(state,move,iswhite)=>{
    const st=~~(move/150);
    const end=move%150;
    const stp=state.board[~~(st/15)][st%15];
    const endp=state.board[~~(end/15)][end%15];
    state.board[~~(st/15)][st%15]=0;
    state.board[~~(end/15)][end%15]=stp;
    state.pieces[iswhite].delete(st);
    state.pieces[iswhite].set(end,stp);
    state.pieces[iswhite^1].delete(end);
    let out=0;
    if(endp===4){
        out=-1;
    }
    else if(endp===-4){
        out=1;
    }
    else if(state.pieces[0].size<2){
        out=1;
    }
    else if(state.pieces[1].size<2){
        out=-1;
    }    
    return {stp,endp,out};
}

const undomove=(state,move,stp,endp,iswhite)=>{
    const st=~~(move/150);
    const end=move%150;
    state.board[~~(st/15)][st%15]=stp;
    state.board[~~(end/15)][end%15]=endp;
    state.pieces[iswhite].set(st,stp);
    state.pieces[iswhite].delete(end);
    if(endp!==0){
        state.pieces[iswhite^1].set(end,endp);
    }
}


export {getPossibleMoves, play, undomove};