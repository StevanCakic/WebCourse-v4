let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
    }, 250);
});

console.log(promise);

promise.then(function (data) {
    console.log(data);
});