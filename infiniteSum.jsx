function infiniteSum(...argList){
    //closure variable
    let sum= argList.reduce((accumulator, current) => accumulator + current, 0) ;

    //partial function to curry the function
    function partialFunction(...argInner){
        return infiniteSum(...argList, ...argInner) ;
    }

    //function to return closure variable
    this.toValue= function(){
        return sum;
    }

    //result is undefined. It's obvious that i have applied the concept wrongly. Waiting for your review on this.
}


console.log(infiniteSum(1,2,3).toValue()) ;