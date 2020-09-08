let arr = [89, 46, 0, 35, 35, -35];

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let total = arr[i];
                arr[i] = arr[j];
                arr[j] = total;
            }
        }
    }
    return arr;
}

console.log(sortArray(arr));