let arr = ['nemo'];
let arr1 = new Array(10).fill('nemo')


function findNemo(arr) {
    let t0 = performance.now();
    for (let i = 0;i<arr.length;i++) {
        if (arr[i] === 'nemo') console.log('I found nemo')
    }
    let t1 = performance.now();
    console.log(`This function is run ${t1-t0} miliseconds`)
}

findNemo(arr)

// BIG O => O(n) => Operasi looping tergantung banyaknya elemen pada Array.

