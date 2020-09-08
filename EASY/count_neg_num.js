// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
//
//     Return the number of negative numbers in grid.
/**
 * @param {number[][]} grid
 * @return {number}
 */
const a = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3], [3,1,0]] //output 8
const b = [[3,2],[1,0]] //output 0
const c = [[5,1,0],[-5,-5,-5]] //output 3
const d = [[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]] //output 16
var countNegatives = function(grid) {
   //create count var
    let count =0
    //loop outer arr
    for(let i =0; i<grid.length; i++){
        // iterate through inner arr
        inner_loop:
        for(let j=0; j<grid[i].length;j++){
            let evaluate = grid[i][j]
            if(grid[i][j]<0){
                count+= grid[i].length-j
                break inner_loop
            }
        }
    }
    console.log(count)
    return count
};
countNegatives(d)


//          TRIED TO USE BINARY SEARCH DOESN'T WORK
// var countNegatives = function(grid) {
//     //create count var
//     let count =0
//     //loop outer arr
//     for(let i =0; i<grid.length; i++){
//         //set min, max, and mid index
//         let min = 0, max = grid[i].length-1, mid = Math.floor((max+min)/2)
//         //check if first index is neg
//         if(grid[i][min]<0){
//             count = count + grid[i].length
//             continue
//         } //check back half b/c mid point greater than 0
//         else if (grid[i][min]>=0){
//             while (grid[i][mid] >=0 && min < max){
//                 if (grid[i][mid] < 0) {
//                     max = mid - 1
//                 } else if (grid[i][mid] >=0) {
//                     min = mid + 1
//                 }
//                 mid = Math.floor((max + min) / 2)
//             }
//
//
//         } //check front half b/c mid point less than 0
//         else {
//             while (grid[i][mid] <0 && min < max){
//                 if (grid[i][mid] < 0) {
//                     max = mid - 1
//                 } else if (grid[i][mid] >=0) {
//                     min = mid + 1
//                 }
//                 mid = Math.floor((max + min) / 2)
//             }
//
//         }
//         // if stmt in case neg # not found, set val of mid to arr length
//         if (grid[i][mid] >=0) {
//             mid = grid[i].length
//         }
//         //determine number of elements in array that are less than -1 and add to count
//         count += grid[i].length - mid
//     }
//     console.log(count)
//     return count
// };
