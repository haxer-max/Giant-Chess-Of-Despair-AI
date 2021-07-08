const temp = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
export default function pieceRotation(board, u, v,c) {
    console.log(c);
    const n=5;
    let t,i,j;
    if(c){
        for(i=0; i<2; i++){
            for(j=i;j<5-i-1;j++){
                t                  = board[i+u][j+v];
                board[i+u][j+v]        = board[n-j-1+u][i+v];
                board[n-j-1+u][i+v]    = board[n-i-1+u][n-j-1+v];
                board[n-i-1+u][n-j-1+v]= board[j+u][n-i-1+v];
                board[j+u][n-i-1+v]    = t;
            }
        }    
    } else{
        for(i=0; i<2; i++){
            for(j=i;j<5-i-1;j++){
                t                  = board[i+u][j+v];
                board[i+u][j+v]    = board[j+u][n-i-1+v]
                board[j+u][n-i-1+v]= board[n-i-1+u][n-j-1+v];
                board[n-i-1+u][n-j-1+v]= board[n-j-1+u][i+v];
                board[n-j-1+u][i+v] =t;
            }
        }
    }
    // if(c){
    //     for (let q = i; q < i + 5; q++) {
    //         for (let w = j; w < j + 5; w++) {
    //             //console.log((4+i-q)+ "asd " +(w-j));
    //             temp[w-j][4+i-q] = boardtemp[q][w];
    //         }
    //     }
    //     //console.log(temp);
    // } else{
    //     for (let q = i; q < i + 5; q++) {
    //         for (let w = j; w < j + 5; w++) {
    //             //console.log((4+i-q)+ "asd " +(w-j));
    //             temp[4+j-w][q-i] = boardtemp[q][w];
    //         }
    //     }
    // }
    // for (let q = i; q < i + 5; q++) {
    //     for (let w = j; w < j + 5; w++) {
    //         boardtemp[q][w]=temp[q-i][w-j];
    //     }
    // }
    return board;
}
