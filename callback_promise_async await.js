var numArr = [1, 2, 3, 4, 5];

// 模拟耗时操作 回调方式实现
var index = 0;
function readDataByCallback(callback) {
    setTimeout(function() {
        callback(numArr[index]);
        index++;
    }, 500);
}

readDataByCallback(function(num0){
    console.log(num0);
    readDataByCallback(function(num1){
        console.log(num1);
        readDataByCallback(function(num2){
            console.log(num2);
            readDataByCallback(function(num3){
                console.log(num3);
                readDataByCallback(function(num4){
                    console.log(num4);
                });
            });
        });
    })
});

// 使用promise方式
var index2 = 0;
function readDataByPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numArr[index2]);
            index2++;
        }, 500);
    });
}

readDataByPromise()
    .then(function(num) {
        console.log(num);
        return readDataByPromise();
    })
    .then(function(num) {
        console.log(num);
        return readDataByPromise();
    })
    .then(function(num) {
        console.log(num);
        return readDataByPromise();
    })
    .then(function(num) {
        console.log(num);
        return readDataByPromise();
    })
    .then(function(num) {
        console.log(num);
        return readDataByPromise();
    });

// 适用async await方式
var index3 = 0;
function readDataByPromise2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numArr[index3]);
            index3++;
        }, 500);
    });
}
async function readDataByAsync() {
    var num = await readDataByPromise2();
    console.log(num);
    num = await readDataByPromise2();
    console.log(num);
    num = await readDataByPromise2();
    console.log(num);
    num = await readDataByPromise2();
    console.log(num);
    num = await readDataByPromise2();
    console.log(num);
}

readDataByAsync();