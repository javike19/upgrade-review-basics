
let arr=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(arr,idx1,idx2){
    let item1=arr[idx1];
    let item2=arr[idx2]
    arr.splice(idx2,1,item1)
    arr.splice(idx1,1,item2)
    console.log(arr)
}
swap(arr,0,1)