let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('We are all going to die');
    }, 250);
});

promise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})
