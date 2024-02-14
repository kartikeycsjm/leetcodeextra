var rearrangeArray = function(nums) {
    let z=[4];
    let pi=0;
    let ni=0;
    while(pi<nums.length&&ni<nums.length){
        if(nums[pi]<0){
            pi++;
        }
        if(nums[ni]>0){
            ni++;
        }
        if(nums[pi]>0&&nums[pi]<0){
            z.push(nums[pi])
            z.push(nums[ni]);
        }
    }
    console.log(z);
};



console.log(rearrangeArray([3,1,-2,-5,2,-4]));

console.log('khkh');