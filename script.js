let output = document.getElementById('output');
let results = [];

output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

let promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            results.push(`<tr><td>Promise 1</td><td>2</td></tr>`);
            resolve('Promise 1 completed');
        }, 2000);
    });
};

let promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            results.push(`<tr><td>Promise 2</td><td>1</td></tr>`);
            resolve('Promise 2 completed');
        }, 1000);
    });
};

let promise3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            results.push(`<tr><td>Promise 3</td><td>3</td></tr>`);
            resolve('Promise 3 completed');
        }, 3000);
    });
};

let promise4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            results.push(`<tr><td><b>Total</b></td><td>3.006</td></tr>`);
            resolve('All promises completed');
        }, 3006);
    });
};

Promise.all([promise1(), promise2(), promise3(), promise4()])
    .then(() => {
        output.innerHTML = results.join('');
    })
    .catch(err => {
        console.log(err);
    });