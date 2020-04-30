function backspaceString (input){
    //edge case
    if(input.length===0)
        return "" ;

    //transform string into array
    let strArr= input.split("") ;
    if(input.includes("#")){
        //find the hash
        let pos= strArr.indexOf("#") ;
        strArr= strArr.filter((item, index) => (index!== pos && index!== pos-1)) ;
        //recursive function for the new string
        return backspaceString(strArr.join("")) ;        
    }
    else{
        //if no backspace string is found
        return input ;
    }
   
}

//Tests:
console.log(backspaceString("abc#d##c")) ;
console.log(backspaceString("abc##d######")) ;
console.log(backspaceString("#######")) ;
console.log(backspaceString("")) ;
console.log(backspaceString("W..##W..##WWWW#")) ;




