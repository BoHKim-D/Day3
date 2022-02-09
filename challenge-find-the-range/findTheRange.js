// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let small = 0;
let large = 0;

// Write your solution below:
for (let i = 0; i < array.length; i++){
    if (small > array[i]){
        small = array[i];
    }
    else if (large < array[i]){
        large = array[i];
    }
}
console.log(small, large);