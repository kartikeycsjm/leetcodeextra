var majorityElement = function(nums) {
    let m=new Map();
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(m.has(nums[i])){
            m.set(nums[i],m.get(nums[i])+1)
        }
        else{
            m.set(nums[i],1)
        }
        if(m.get(nums[i])>(nums.length/2)){
            return nums[i]
        }
    }
};


console.log(majorityElement([3,3,3,3,4,4,4,4]));