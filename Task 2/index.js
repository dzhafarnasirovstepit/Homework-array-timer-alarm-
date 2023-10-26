console.log();

function cdTime(interval, firstNum) {

    if (interval <= 0 || firstNum < 0) {
        console.log("Incorrect data");
        return;
    }

    function countDown(currentNumber) {
        console.log(currentNumber);

        if (currentNumber === 0) {
            return;
        }

        setTimeout(function () {
            countDown(currentNumber - 1);
        }, interval * 1000);

    }

    countDown(firstNum);

}

cdTime(1, 5);