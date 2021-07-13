import staticEvaluation from "./staticeval";
import {getPossibleMoves, play, undomove} from "./moveutil";




function MinMax(state, depth, iswhite, alpha, beta){
    if(depth === 0){
        return [staticEvaluation(state.pieces, state.board),0];
    }
    const moveset=[];
    getPossibleMoves(moveset,state, iswhite);
    let _;
    if(iswhite){
        let bestMove=0,bestval=-100000;
        for(let i=0; i<moveset.length; i++){
            const {stp,endp,out}=play(state,moveset[i],iswhite);
            let val;
            if(out===0){
                [val, _]=MinMax(state, depth-1, 0, alpha, beta);
            }
            else{
                val=out*100000;
            }
            if(val>bestval){
                bestval=val;
                bestMove=moveset[i];
                alpha=Math.max(alpha,val);
                if(beta<=alpha){
                    undomove(state,moveset[i],stp,endp,iswhite);
                    break;
                }
            }
            undomove(state,moveset[i],stp,endp,iswhite);
        }
        return [bestval,bestMove];
    }
    else{
        let bestMove=0,bestval=100000;
        for(let i=0; i<moveset.length; i++){
            const {stp,endp,out}=play(state,moveset[i],iswhite);
            let val;
            if(out===0){    
                [val, _]=MinMax(state, depth-1, 1, alpha, beta);
            }
            else{
                val=out*100000;
            }
            if(val<bestval){
                bestval=val;
                bestMove=moveset[i];
                beta=Math.min(beta,val);
                if(beta<=alpha){
                    undomove(state,moveset[i],stp,endp,iswhite);
                    break;
                }
            }
            undomove(state,moveset[i],stp,endp,iswhite);
        }
        return [bestval,bestMove];
    }
}

export default MinMax;