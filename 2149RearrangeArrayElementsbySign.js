var rearrangeArray = function(nums) {
    let z=[];
    let pi=0;
    let ni=0;
    while(pi<nums.length&&ni<nums.length){
        if(nums[pi]<0){
            pi++;
        }
        if(nums[ni]>0){
            ni++;
        }
        if(nums[pi]>0&&nums[ni]<0){
            z.push(nums[pi])
            z.push(nums[ni]);
            pi++;
            ni++
        }
    }
    return z;
};



console.log(rearrangeArray([3,1,-2,-5,2,-4]));

console.log('khkh');