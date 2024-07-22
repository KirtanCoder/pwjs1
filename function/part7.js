//Lambda function -> Arrow function () => {}

    function processarray(array , fn) {
        for(let i=0;i<array.length;i++) {
            console.log("index",i,"value",array[i],"return value of fn",fn(array[i]));
        }
    }
    processarray([2,3,4,5,6], (x) => {return x*x*x;});
    processarray([2,3,4,5,6], x => x*x*x);