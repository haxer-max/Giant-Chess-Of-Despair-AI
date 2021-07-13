const valmap={
    1:3,
    2:3.2,
    3:3.1,
    4:50,
    5:2.2
}
export default function staticEvaluation(pieces,board){
    var i,score=0;
    //console.log("valmap",valmap);
    //console.log(valmap[1]);
    for(let [key,value] of pieces[1].entries()){
        //console.log("check",key,value);
        //console.log(score)
        score+=valmap[value];
    }
    for(let [key,value] of pieces[0].entries()){
        //console.log("check2",key,value);
        score-=valmap[-value];
        //console.log(score)
    }
    //console.log("score",score);
    return score;
}