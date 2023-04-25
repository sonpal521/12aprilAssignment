function findIntersection(arr1,arr2){
    let mp  ={};
    for(let i=0;i<arr2.length;i++){
        if(mp[arr2[i]]){
            mp[arr2[i]]++;
        }else{
            mp[arr2[i]]= 1;
        }
    }
    let result=[];
    for(let i=0;i<arr1.length;i++){
        if(mp[arr1[i]]){
            result.push(arr1[i]);
        }
        
    }
    return result;
}
let arr1 = [1,2,2,1], arr2 = [2,2];// [2,2]

// let arr1 = [4,9,5], arr2 = [9,4,9,8,4]; // [4,9]
console.log(findIntersection(arr1,arr2));
