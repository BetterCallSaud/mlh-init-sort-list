/*
    Author: Saud Hashmi
    Date Created: 28.06.2021
    Topic: Sorting list using Bubble Sort
*/

let arr = []

for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100))
}

console.log(arr);

// Bubble sort algorithm
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
            // Swapping arr[i] and arr[j]
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr);