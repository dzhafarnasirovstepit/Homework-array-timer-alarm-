console.clear();

function inputElementsOfArray (arr) {
    
    let index = 0;

    function upcomingElement () {
        
        if (index < arr.length) {
            console.log(arr[index]);
            index++;
            setTimeout (upcomingElement, 1000);
        }
    }

    upcomingElement();

}

const enteredArray = ["a", 1, true, "b", 8, "hello", false, "world" ]

inputElementsOfArray(enteredArray);