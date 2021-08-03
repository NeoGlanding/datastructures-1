let arr = ['nemo'];
let arr1 = new Array(10).fill('nemo')


function findNemo(arr) {
    let t0 = performance.now();
    for (let i = 0;i<arr.length;i++) {
        if (arr[i] === 'nemo') console.log('I found nemo')
    }
    let t1 = performance.now();
    console.log(`This function is run ${t1-t0} miliseconds`);
}

// findNemo(arr)
// BIG O => O(n) => Operasi looping tergantung banyaknya elemen pada Array. (Linear) => Good

const boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

function compression(boxes) {
    console.log(boxes[0]); // O(1);
    console.log(boxes[1]) // O(1);
}

compression(boxes)
// BIG O => O(2) => Operasi looping ini konstan atau tidak bergantung kepada banyak input (Constant)  => Excellent