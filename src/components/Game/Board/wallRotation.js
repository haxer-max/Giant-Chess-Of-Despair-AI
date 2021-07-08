export default function wallRotation(board, u, v,c) {
    const temp = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    let t,i,j;
    const n=5;
    if(c){
        for(i=0; i<2; i++){
            for(j=i; j<5-i-1; j++){
                t                  = board[i+u][j+v];
                board[i+u][j+v]        = board[n-j-1+u][i+v];
                board[n-j-1+u][i+v]    = board[n-i-1+u][n-j-1+v];
                board[n-i-1+u][n-j-1+v]= board[j+u][n-i-1+v];
                board[j+u][n-i-1+v]    = t;
            }
        }
        for(i=u; i<u+5; i++) {
            for(j=v; j<v+5; j++) {
                if(board[i][j]>0) board[i][j]=(board[i][j]+2)%4+1;
            }
        }
    } else{
        for(i=0; i<2; i++){
            for(j=i;j<5-i-1;j++){
                t                  = board[i+u][j+v];
                board[i+u][j+v]    = board[j+u][n-i-1+v];
                board[j+u][n-i-1+v]= board[n-i-1+u][n-j-1+v];
                board[n-i-1+u][n-j-1+v]= board[n-j-1+u][i+v];
                board[n-j-1+u][i+v] =t;
            }
        }
        for(i=u; i<u+5; i++) {
            for(j=v; j<v+5; j++) {
                if(board[i][j]>0) board[i][j]=board[i][j]%4+1;
            }
        }
    }
    return board;
}