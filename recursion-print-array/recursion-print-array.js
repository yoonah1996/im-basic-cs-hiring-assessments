/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(arr) {
    // let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            // newArr.push(arr[i]);
            console.log(arr[i]);
        }else if(Array.isArray(arr[i])){
            //  newArr.push(printArray(arr[i]));
            printArray(arr[i]);

        }
    }
    // newArr.join('');
    
}; // [1,2,3,4] => '1234'

module.exports = printArray;