function pangram(input){
    
    //transform string into array
    let strArr= input.toLowerCase().split("") ;
    //remove white space and punctuations and duplicates
    strArr= strArr.filter((item, index) => strArr.indexOf(item)===index && (item.charCodeAt(0)>=97 && item.charCodeAt(0)<=122)) ;
    //number of alphabets
    if(strArr.length===26)
        return true ;
    else 
        return false ;
}

console.log(pangram("The quick brown fox jumps over the lazy dog."))
console.log(pangram("The quick brown fox jumps over the lazy doo."))