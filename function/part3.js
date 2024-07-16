
function fun() {
    console.log("Hello world");

  return  function cleanup() {
        console.log("Cleaning up the resource");
    }
}

const result = fun();
console.log(result);
result();