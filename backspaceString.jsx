function backspaceString (input){
    if(input.length===0)
        return "" ;
    let strArr= input.split("") ;
    if(input.includes("#")){
        let pos= strArr.indexOf("#") ;
        strArr= strArr.filter((item, index) => (index!== pos && index!== pos-1)) ;
        return backspaceString(strArr.join("")) ;        
    }
    else{
        return input ;
    }
   
}

//Tests:
console.log(backspaceString("abc#d##c")) ;
console.log(backspaceString("abc##d######")) ;
console.log(backspaceString("#######")) ;
console.log(backspaceString("")) ;
console.log(backspaceString("W..##W..##WWWW#")) ;




