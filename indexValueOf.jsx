function indexValueOf(input){
    let posToStart= 0 ;

    //this is to determine the position where we can start looking thereby reducing the number of iterations (for performance)
    for(let i= 0 ; i<=input.length ; i++){
        if(input[i]>=0){
            if(i=== input[i])
                return i ;
            else{
                posToStart= input[i] ;
                break ;
            }
        }
    }

    for(let i= posToStart ; i<input.length-1 ; i++){
        if(input[i]=== i)
            return i ;
    }

    return -1 ;

}

console.log(indexValueOf([-8,0,2,5]));
console.log(indexValueOf([-1,0,3,6]));