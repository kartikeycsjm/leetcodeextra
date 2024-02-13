var firstPalindrome = function(words) {
    let reverse=(str)=>{
        let a=str.split('')
        let i=0;
        let j=str.length-1; 
        while(i<=j){
            [a[i],a[j]]=[a[j],a[i]]
            i++;
            j--;
        }
        return a.join('');
    }
    for(let i=0;i<words.length;i++){
        let x=words[i];
        if(words[i]===reverse(words[i])){
            return words[i];
        }
        
    }
    return "";
};


console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));