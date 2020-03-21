let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 250);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});